/**
 * File operations tool.
 */

// Vendor dependencies.
import chardet from 'chardet';
import { fileTypeFromBuffer } from 'file-type';

// Framework dependencies.

// Tool.
class Tool {
    /**
     * Preview remote file.
     */
    async previewRemoteFile(url: string, signal: AbortSignal, chunkSize?: number): Promise<DataViewPreviewConfig> {
        const response = await fetch(encodeURI(url), { headers: { Range: `bytes=0-${chunkSize ?? DEFAULT_PREVIEW_CHUNK_SIZE - 1}` }, signal });
        if (!response.ok) {
            throw await buildFetchError(response, `Failed to fetch '${url}' file.`, 'datapos-connector-file-store-emulator|Connector|preview');
        }

        const unit8Array = new Uint8Array(await response.arrayBuffer());
        const fileType = await fileTypeFromBuffer(unit8Array);
        if (fileType != undefined) throw new Error(`Files of type '${fileType.ext}' (mine '${fileType.mime}') not supported.`);

        const dataViewPreviewConfig = previewUnit8Array(unit8Array);
        return dataViewPreviewConfig;
    }
}

// Exports.
export { Tool };
