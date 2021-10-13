import { FileSystemFileName } from './FileSystemFileName';
import { FileSystemFileContent } from './FileSystemFileContent';
import { FileSystemFilePrimitives } from '../utils'

export class FileSystemFile {

  constructor(
    readonly name: FileSystemFileName,
    readonly content: FileSystemFileContent
  ) {}

  fromPrimitives(primitives: FileSystemFilePrimitives): FileSystemFile {
    return new FileSystemFile(new FileSystemFileName(primitives.name), new FileSystemFileContent(primitives.content));
  }

  toPrimitives() {
    return {
      name: this.name.value, 
      content: this.content.value
    }
  }
}