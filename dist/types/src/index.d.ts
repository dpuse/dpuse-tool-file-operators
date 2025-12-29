import { DataFormatId } from '@datapos/datapos-shared';
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
declare class Tool {
    /**
     * Preview file.
     */
    previewFile(url: string, signal: AbortSignal, chunkSize?: number): Promise<PreviewConfig>;
}
export { type PreviewConfig, Tool };
