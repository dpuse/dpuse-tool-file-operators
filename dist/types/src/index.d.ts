import { FileTypeResult } from 'file-type';
import { DataFormatId } from '@datapos/datapos-shared/component/dataView';
/**
 * File preview configuration.
 */
interface FilePreviewConfig {
    bytes: Uint8Array;
    dataFormatId: DataFormatId | undefined;
    encodingId: string | undefined;
    encodingConfidenceLevel: number | undefined;
    fileTypeConfig: FileTypeResult | undefined;
    text: string | undefined;
}
/**
 * Tool.
 */
declare class Tool {
    /**
     * Preview file.
     */
    previewFile(url: string, signal: AbortSignal, chunkSize?: number): Promise<FilePreviewConfig>;
}
export { type FilePreviewConfig, Tool };
