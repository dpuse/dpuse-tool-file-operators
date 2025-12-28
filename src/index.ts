/**
 * File operations tool.
 */

// Vendor dependencies.
import chardet from 'chardet';
import { fileTypeFromBuffer } from 'file-type';

// Framework dependencies.
import { buildFetchError } from '@datapos/datapos-shared/errors';
import type { Encoding } from '@datapos/datapos-shared/component/connector';
import type { DataViewPreviewConfig, EncodingConfig } from '@datapos/datapos-shared';

// Data dependencies.
import encodingConfigData from './encodingConfigs.json';

// Constants.
const DEFAULT_PREVIEW_CHUNK_SIZE = 4096;

// Tool.
class Tool {
    /**
     * Get encoding configurations.
     */
    getEncodingConfigs(localeId = 'en'): EncodingConfig[] {
        const encodingConfigs: EncodingConfig[] = [];
        for (const key in encodingConfigData as Record<string, EncodingConfig>) {
            if (Object.prototype.hasOwnProperty.call(encodingConfigData, key)) {
                // eslint-disable-next-line security/detect-object-injection
                const encodingConfig = (encodingConfigData as Record<string, EncodingConfig>)[key];
                if (encodingConfig == null) continue;
                encodingConfigs.push({ ...encodingConfig, label: encodingConfig.label || encodingConfig.id });
            }
        }
        return encodingConfigs.toSorted((left, right) => left.groupLabel.localeCompare(right.groupLabel) || left.label.localeCompare(right.label));
    }

    /**
     * Preview remote file.
     */
    async previewRemoteFile(url: string, signal: AbortSignal, chunkSize?: number): Promise<DataViewPreviewConfig> {
        const response = await fetch(encodeURI(url), { headers: { Range: `bytes=0-${chunkSize ?? DEFAULT_PREVIEW_CHUNK_SIZE - 1}` }, signal });
        if (!response.ok) {
            throw await buildFetchError(response, `Failed to fetch '${url}' file.`, 'datapos-tool-file-operators.previewRemoteFile');
        }

        const unit8Array = new Uint8Array(await response.arrayBuffer());
        const fileType = await fileTypeFromBuffer(unit8Array);
        if (fileType != undefined) throw new Error(`Files of type '${fileType.ext}' (mine '${fileType.mime}') not supported.`);

        const dataViewPreviewConfig = previewUnit8Array(unit8Array);
        return dataViewPreviewConfig;
    }
}

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//#region: Helpers.

/**
 *
 */
function previewUnit8Array(byteData: Uint8Array): DataViewPreviewConfig {
    const encoding = determineEncoding(byteData);
    const decodedData = decodeData(byteData, encoding);
    return {
        asAt: Date.now(),
        columnConfigs: [],
        dataFormatId: 'dtv',
        duration: 0,
        encodingId: decodedData.encoding.id,
        encodingConfidenceLevel: decodedData.encoding.confidenceLevel,
        hasHeaders: undefined,
        records: [],
        size: byteData.length,
        text: decodedData.textData
    };
}

/**
 * Determine encoding.
 */
function determineEncoding(uint8Array: Uint8Array): Encoding {
    if (uint8Array[0] === 239 && uint8Array[1] === 187 && uint8Array[2] === 191) return { confidenceLevel: 100, id: 'utf8' };
    if (uint8Array[0] === 254 && uint8Array[1] === 255) return { confidenceLevel: 100, id: 'utf-16be' };
    if (uint8Array[0] === 255 && uint8Array[1] === 254) return { confidenceLevel: 100, id: 'utf-16le' };
    const detectedEncodings = chardet.analyse(uint8Array);
    const detectedEncoding = detectedEncodings[0] ?? { confidence: undefined, name: 'utf8' };
    const encoding = (encodingConfigData as Record<string, EncodingConfig>)[detectedEncoding.name.toLowerCase()];
    const encodingId = encoding == null ? 'utf8' : encoding.id;
    return { confidenceLevel: detectedEncoding.confidence, id: encodingId };
}

/**
 * Decode data.
 */
function decodeData(data: Uint8Array, encoding: Encoding): { encoding: Encoding; textData: string } {
    try {
        const textData = new TextDecoder(encoding.id).decode(truncateData(data));
        return { encoding, textData };
    } catch (error) {
        const fallbackEncoding = { id: 'utf8', confidenceLevel: undefined };
        console.log(`Unsupported encoding '${encoding.id}' defaulted to '${fallbackEncoding.id}'.`, error); // TODO: This is not reported?
        const textData = new TextDecoder(fallbackEncoding.id).decode(truncateData(data));
        return { encoding: fallbackEncoding, textData };
    }
}

/**
 * Returns the leading bytes up to (but not including) the last CRLF (13,10),
 * CR (13), or LF (10) byte sequence. Returns all bytes if no end-of-line
 * sequence is found.
 */
function truncateData(uint8Array: Uint8Array): Uint8Array {
    let transformedData = uint8Array;
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
export { Tool };
