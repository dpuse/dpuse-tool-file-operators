import { FileTypeResult } from 'file-type';
import { DataFormatId } from '@dpuse/dpuse-shared/component/dataView';
export interface FilePreviewResult {
    bytes: Uint8Array;
    dataFormatId: DataFormatId | undefined;
    encodingId: string | undefined;
    encodingConfidenceLevel: number | undefined;
    fileTypeConfig: FileTypeResult | undefined;
    text: string | undefined;
}
export declare class Tool {
    previewFile(url: string, signal: AbortSignal, chunkSize?: number): Promise<FilePreviewResult>;
}
