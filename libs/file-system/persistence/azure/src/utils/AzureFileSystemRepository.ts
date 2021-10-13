import { BlobServiceClient, BlockBlobParallelUploadOptions, ContainerClient } from '@azure/storage-blob';
import { FileSystemFile, FileSystemRepository } from '@frappe/file-system/domain'


export class AzureFileSystemRepository implements FileSystemRepository {
  private readonly container: ContainerClient; 
  
  constructor() {
    const client: BlobServiceClient = new BlobServiceClient(`https://${process.env.AZURE_ACCOUNT_KEY}.blob.core.windows.net`);

    this.container = client.getContainerClient(process.env.AZURE_BLOB_CONTAINER_NAME);
  }
  
  async upload(file: FileSystemFile): Promise<void> {
    const { name, content } = file.toPrimitives();
    const client = this.container.getBlockBlobClient(name);

    const options: BlockBlobParallelUploadOptions = { blobHTTPHeaders: { blobContentType: content.type } };

    await client.uploadData(content, options);
  }
}