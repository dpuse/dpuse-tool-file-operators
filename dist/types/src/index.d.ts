import { DataViewPreviewConfig, EncodingConfig } from '@datapos/datapos-shared';
declare class Tool {
    /**
     * Get encoding configurations.
     */
    getEncodingConfigs(localeId?: string): EncodingConfig[];
    /**
     * Preview remote file.
     */
    previewRemoteFile(url: string, signal: AbortSignal, chunkSize?: number): Promise<DataViewPreviewConfig>;
}
export { Tool };
