import {FileSystemRepository, FileSystemFile, FileSystemFileName, FileSystemFileContent} from '@frappe/file-system/domain'

interface Props {
  readonly fileSystemRepository: FileSystemRepository
}
export class FileSystemFileUploader {
  private readonly fileSystemRepository: FileSystemRepository;

  constructor({fileSystemRepository}: Props){
    this.fileSystemRepository = fileSystemRepository;
  }

  async execute(name: string, content: File) {
    const fileSystemFile = new FileSystemFile(new FileSystemFileName(name), new FileSystemFileContent(content))
    return this.fileSystemRepository.upload(fileSystemFile)
  }
}