import {FileSystemRepository, FileSystemFile, FileSystemFileName, FileSystemFileContent} from '@frappe/file-system/domain'

interface FileSystemFileUploaderProps {
  readonly fileSystemRepository: FileSystemRepository
}
export class FileSystemFileUploader {
  private readonly fileSystemRepository: FileSystemRepository;

  constructor({fileSystemRepository}: FileSystemFileUploaderProps){
    this.fileSystemRepository = fileSystemRepository;
  }

  async execute(name: string, content: File | Buffer) {
    const fileSystemFile = new FileSystemFile(new FileSystemFileName(name), new FileSystemFileContent(content))
    return this.fileSystemRepository.upload(fileSystemFile)
  }
}