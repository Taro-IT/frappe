import {AwilixContainer, asClass, asFunction} from "awilix";
import {fileSystemRouting} from "./file-system.routing";
import {AzureFileSystemRepository} from "@frappe/file-system/persistence/azure";
import {FileSystemFileUploader} from "@frappe/file-system/application";

export const registerFileSystemModule = (container: AwilixContainer) => {
  container.register({
    fileSystemRepository: asClass(AzureFileSystemRepository).singleton(),
    fileUploader: asClass(FileSystemFileUploader).singleton(),
    fileSystemRouting: asFunction(fileSystemRouting).singleton(),
  })
}
