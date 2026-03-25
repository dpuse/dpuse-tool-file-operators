import { FileTypeResult } from 'file-type';
import { DataFormatId } from '@dpuse/dpuse-shared/component/dataView';
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
 * Tool.
 */
declare class Tool {
    /**
     * Preview file.
     */
    previewFile(url: string, signal: AbortSignal, chunkSize?: number): Promise<FilePreviewResult>;
}
export { type FilePreviewResult, Tool };
