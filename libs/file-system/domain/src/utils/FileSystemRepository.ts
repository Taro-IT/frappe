import { FileSystemFile } from '../model';

export interface FileSystemRepository {
  upload(file: FileSystemFile): Promise<void>;
}