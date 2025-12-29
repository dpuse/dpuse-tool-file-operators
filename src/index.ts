/**
 * File operations tool.
 */

// Vendor dependencies.
import chardet from 'chardet';
import { fileTypeFromBuffer } from 'file-type';

// Framework dependencies.
import { buildFetchError } from '@datapos/datapos-shared/errors';
import type { DataFormatId } from '@datapos/datapos-shared';
import type { EncodingConfig } from '@datapos/datapos-shared/encoding';

// Data dependencies.
import { encodingConfigMap } from '@datapos/datapos-shared/encoding';

// Constants.
const DEFAULT_PREVIEW_CHUNK_SIZE = 4096;
const FALLBACK_ENCODING: EncodingConfig = { id: 'utf8', confidenceLevel: undefined };

// Preview configuration interface.
interface PreviewConfig {
    bytes: Uint8Array;
    dataFormatId: DataFormatId;
    encodingId: string | undefined;
    encodingConfidenceLevel: number | undefined;
    size: number;
    text: string;
}

/**
 * Tool.
 */
class Tool {
    /**
     * Preview file.
     */
    async previewFile(url: string, signal: AbortSignal, chunkSize?: number): Promise<PreviewConfig> {
        const response = await fetch(encodeURI(url), { headers: { Range: `bytes=0-${chunkSize ?? DEFAULT_PREVIEW_CHUNK_SIZE - 1}` }, signal });
        if (!response.ok) {
            throw await buildFetchError(response, `Failed to fetch '${url}' file.`, 'datapos-tool-file-operators.previewRemoteFile');
        }
        const fileBytes = new Uint8Array(await response.arrayBuffer());

        const fileType = await fileTypeFromBuffer(fileBytes);
        if (fileType && !fileType.mime.startsWith('text/')) {
            throw new Error(`Files of type '${fileType.ext}' (mine '${fileType.mime}') not supported.`);
        }

        const dataViewPreviewConfig = previewFileBytes(fileBytes);
        return dataViewPreviewConfig;
    }
}

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//#region: Helpers.

/**
 * preview file bytes.
 */
function previewFileBytes(fileBytes: Uint8Array): PreviewConfig {
    const fileEncoding = determineEncoding(fileBytes);
    const fileDecoding = decodeFileBytes(fileBytes, fileEncoding);
    return {
        bytes: fileBytes,
        dataFormatId: 'dtv',
        encodingId: fileDecoding.encoding.id,
        encodingConfidenceLevel: fileDecoding.encoding.confidenceLevel,
        size: fileBytes.length,
        text: fileDecoding.text
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

//#endregion ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Exports.
export { type PreviewConfig, Tool };
