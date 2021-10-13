import {FileSystemRepository, FileSystemFile, FileSystemFileName, FileSystemFileContent} from '@frappe/file-system/domain'

interface Props {
  readonly fileSystemRepository: FileSystemRepository
}
export class FileUploader {
  private readonly fileSystemRepository: FileSystemRepository;

  constructor({fileSystemRepository}: Props){
    this.fileSystemRepository = fileSystemRepository;
  }

  async execute(name: string, content: File) {
    return this.fileSystemRepository.upload(new FileSystemFile(new FileSystemFileName(name), new FileSystemFileContent(content)))
  }
}