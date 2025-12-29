import { DataFormatId } from '@datapos/datapos-shared';
interface PreviewConfig {
    bytes: Uint8Array;
    dataFormatId: DataFormatId | undefined;
    encodingId: string | undefined;
    encodingConfidenceLevel: number | undefined;
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
