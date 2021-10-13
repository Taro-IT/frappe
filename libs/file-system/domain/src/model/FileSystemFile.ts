import { BlobServiceClient } from '@azure/storage-blob';
import { FileSystemFileName } from './FileSystemFileName';
import { FileSystemContent } from './FileSystemContent';

export class FileSystemFile {

  constructor(
    readonly name: FileSystemFileName,
    readonly content: FileSystemContent
  ) {}

  // TODO ADD fromPrimitives (Create Primitives on utils)

  // TODO ADD FileSystemFilePrimitives
  toPrimitives() {
    return {
      name: this.name.value, 
      content: this.content.value
    }
  }
}