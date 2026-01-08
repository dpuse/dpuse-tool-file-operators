/**
 * File operations tool.
 */

// Vendor dependencies.
import chardet from 'chardet';
import { fileTypeFromBuffer, type FileTypeResult } from 'file-type';

// Framework dependencies.
import { buildFetchError } from '@datapos/datapos-shared/errors';
import type { DataFormatId } from '@datapos/datapos-shared/component/dataView';
import type { EncodingConfig } from '@datapos/datapos-shared/encoding';

// Data dependencies.
import { encodingConfigMap } from '@datapos/datapos-shared/encoding';

/**
 * File preview result.
 */
interface FilePreviewResult {
    bytes: Uint8Array;
    dataFormatId: DataFormatId | undefined;
    encodingId: string | undefined;
    encodingConfidenceLevel: number | undefined;
    fileTypeConfig: FileTypeResult | undefined;
    text: string | undefined;
}

/**
 *
 */
const DEFAULT_PREVIEW_CHUNK_SIZE = 4096;

/**
 *
 */
const FALLBACK_ENCODING: EncodingConfig = { id: 'utf8', confidenceLevel: undefined };

/**
 *
 */
const FILE_TYPE_MAP: Record<string, { label: string; isAutoDetectable: boolean; isSupported: boolean; magicBytes?: number[]; notes: string }> = {
    arrow: { label: 'Columnar format for tables of data.', isAutoDetectable: true, isSupported: false, notes: '' },
    avro: { label: 'Object container file developed by Apache Avro.', isAutoDetectable: true, isSupported: false, notes: '' },
    docx: { label: 'Microsoft Word document.', isAutoDetectable: true, isSupported: false, notes: '' },
    ics: { label: 'iCalendar.', isAutoDetectable: true, isSupported: false, notes: '' },
    jmp: { label: 'JMP data file format by SAS Institute.', isAutoDetectable: true, isSupported: false, notes: '' },
    ods: { label: 'OpenDocument for spreadsheets.', isAutoDetectable: true, isSupported: false, notes: '' },
    ots: { label: 'OpenDocument for word processing.', isAutoDetectable: true, isSupported: false, notes: '' },
    parquet: { label: 'Apache Parquet.', isAutoDetectable: true, isSupported: false, notes: '' },
    pcap: { label: 'Libpcap file format.', isAutoDetectable: true, isSupported: false, notes: '' },
    pdf: { label: 'Portable document format.', isAutoDetectable: true, isSupported: false, notes: '' },
    por: { label: 'SPSS portable file.', isAutoDetectable: false, isSupported: false, magicBytes: [0x53, 0x50, 0x53, 0x53, 0x50, 0x4f, 0x52, 0x54], notes: '' },
    sav: { label: 'SPSS statistical data file.', isAutoDetectable: true, isSupported: false, magicBytes: [0x24, 0x46, 0x4c, 0x32], notes: '' },
    shp: { label: 'Geospatial vector data format.', isAutoDetectable: true, isSupported: false, notes: '' },
    sqlite: { label: 'SQLite file.', isAutoDetectable: true, isSupported: false, notes: '' },
    vcf: { label: 'vCard.', isAutoDetectable: true, isSupported: false, notes: '' },
    vtt: { label: 'WebVTT File (for video captions).', isAutoDetectable: true, isSupported: false, notes: '' },
    xls: { label: 'Microsoft Excel legacy document.', isAutoDetectable: false, isSupported: false, magicBytes: [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1], notes: '' },
    xlsx: { label: 'Microsoft Excel document.', isAutoDetectable: true, isSupported: false, magicBytes: [0x50, 0x4b, 0x03, 0x04], notes: '' },
    xlsm: { label: 'Microsoft Excel macro-enabled document.', isAutoDetectable: true, isSupported: false, notes: '' },
    xltx: { label: 'Microsoft Excel template.', isAutoDetectable: true, isSupported: false, notes: '' },
    xltm: { label: 'Microsoft Excel macro-enabled template.', isAutoDetectable: true, isSupported: false, notes: '' },
    xml: { label: 'eXtensible markup language.', isAutoDetectable: true, isSupported: false, notes: '' }
};

/**
 * Tool.
 */
class Tool {
    /**
     * Preview file.
     */
    async previewFile(url: string, signal: AbortSignal, chunkSize?: number): Promise<FilePreviewResult> {
        const response = await fetch(encodeURI(url), { headers: { Range: `bytes=0-${chunkSize ?? DEFAULT_PREVIEW_CHUNK_SIZE - 1}` }, signal });
        if (!response.ok) throw await buildFetchError(response, `Failed to fetch '${url}' file.`, 'datapos-tool-file-operators.previewRemoteFile');

        const fileBytes = new Uint8Array(await response.arrayBuffer());
        return await previewFileBytes(fileBytes);
    }
}

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//#region: Helpers.
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Preview file bytes.
 */
async function previewFileBytes(fileBytes: Uint8Array): Promise<FilePreviewResult> {
    if (fileBytes.length === 0) {
        return {
            bytes: fileBytes,
            dataFormatId: undefined,
            encodingId: undefined,
            encodingConfidenceLevel: undefined,
            fileTypeConfig: undefined,
            text: undefined
        };
    }

    const fileTypeConfig = await fileTypeFromBuffer(fileBytes);

    if (fileTypeConfig == null) {
        // We were not able to determine a type by analysing the file content.
        // Assume it is a text file testing for 'json' and defaulting to 'dtv'.
        const fileEncoding = determineEncoding(fileBytes);
        const decodedResult = decodeFileBytes(fileBytes, fileEncoding);
        return {
            bytes: fileBytes,
            dataFormatId: isLikelyJSONFormat(decodedResult.text) ? 'json' : 'dtv',
            encodingId: decodedResult.encoding.id,
            encodingConfidenceLevel: decodedResult.encoding.confidenceLevel,
            fileTypeConfig,
            text: decodedResult.text
        };
    }

    const lookupFileTypeConfig = FILE_TYPE_MAP[fileTypeConfig.ext];
    if (lookupFileTypeConfig != null) {
        // We have a type.
        return {
            bytes: fileBytes,
            dataFormatId: lookupFileTypeConfig.isSupported ? (fileTypeConfig.ext as DataFormatId) : undefined,
            encodingId: undefined,
            encodingConfidenceLevel: undefined,
            fileTypeConfig,
            text: undefined
        };
    }

    return {
        bytes: fileBytes,
        dataFormatId: undefined,
        encodingId: undefined,
        encodingConfidenceLevel: undefined,
        fileTypeConfig,
        text: undefined
    };
}

/**
 * Determine encoding from file bytes.
 */
function determineEncoding(fileBytes: Uint8Array): EncodingConfig {
    if (fileBytes[0] === 239 && fileBytes[1] === 187 && fileBytes[2] === 191) return { confidenceLevel: 100, id: 'utf8' };
    if (fileBytes[0] === 254 && fileBytes[1] === 255) return { confidenceLevel: 100, id: 'utf-16be' };
    if (fileBytes[0] === 255 && fileBytes[1] === 254) return { confidenceLevel: 100, id: 'utf-16le' };
    const detectedEncodings = chardet.analyse(fileBytes);
    const detectedEncoding = detectedEncodings[0] ?? { confidence: undefined, name: 'utf8' };
    const encoding = encodingConfigMap[detectedEncoding.name.toLowerCase()];
    const encodingId = encoding == null ? 'utf8' : encoding.id;
    return { confidenceLevel: detectedEncoding.confidence, id: encodingId };
}

/**
 * Decode file bytes to text.
 */
function decodeFileBytes(fileBytes: Uint8Array, encoding: EncodingConfig): { encoding: EncodingConfig; text: string } {
    try {
        const text = new TextDecoder(encoding.id).decode(truncateData(fileBytes));
        return { encoding, text };
    } catch {
        const text = new TextDecoder(FALLBACK_ENCODING.id, { fatal: false }).decode(truncateData(fileBytes));
        return { encoding: FALLBACK_ENCODING, text };
    }
}

/**
 * Is likely JSON format.
 */
function isLikelyJSONFormat(text: string): boolean {
    const trimmedText = text.trimStart();
    if (trimmedText.length > 2) {
        const firstChar = trimmedText[0];
        const isObjectStart = firstChar === '{';
        const isArrayStart = firstChar === '[';
        const hasKeyValue = /"\s*:\s*/.test(trimmedText); // "key": something
        const hasJSONLiterals = /\b(true|false|null)\b/.test(trimmedText);
        const hasQuotes = trimmedText.includes('"');
        return (isObjectStart || isArrayStart) && (hasKeyValue || hasJSONLiterals || hasQuotes);
    }
    return false;
}

/**
 * Is likely XML format. This is an alternative xml file identifier if 'file-type' xml identification proves unsatisfactory.
 */
function isLikelyXMLFormat(text: string): boolean {
    const trimmedText = text.trimStart();
    return trimmedText.startsWith('<?xml') || /^<([a-zA-Z_][\w\-.:]*)[\s>]/.test(trimmedText);
}

/**
 * Returns the leading bytes up to (but not including) the last CRLF (13,10),
 * CR (13), or LF (10) byte sequence. Returns all bytes if no end-of-line
 * sequence is found.
 */
function truncateData(fileBytes: Uint8Array): Uint8Array {
    let transformedData = fileBytes;
    const characterCount = transformedData.length;
    for (let characterIndex = characterCount - 1; characterIndex >= 0; characterIndex--) {
        // eslint-disable-next-line security/detect-object-injection
        const character = transformedData[characterIndex];
        if (character === 10) {
            if (characterIndex > 0 && transformedData[characterIndex - 1] === 13) {
                transformedData = transformedData.slice(0, characterIndex - 1);
                break;
            } else {
                transformedData = transformedData.slice(0, characterIndex);
                break;
            }
        } else if (character === 13) {
            transformedData = transformedData.slice(0, characterIndex);
            break;
        }
    }
    return transformedData;
}

//#endregion ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Exports.
export { type FilePreviewResult, Tool };
