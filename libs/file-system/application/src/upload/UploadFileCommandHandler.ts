import {CommandHandler} from "@tshio/command-bus";
import {UploadFileCommand} from "./UploadFileCommand";
import {FileSystemFileUploader} from "./FileSystemFileUploader";

type Props = {
  readonly fileUploader: FileSystemFileUploader
}

export class UploadFileCommandHandler implements CommandHandler<UploadFileCommand> {
  private readonly fileUploader: FileSystemFileUploader;

  readonly commandType = UploadFileCommand.name;

  constructor({ fileUploader }: Props) {
    this.fileUploader = fileUploader;
  }

  async execute(command: UploadFileCommand) {
    const { name, content } = command.payload;
    
    return this.fileUploader.execute(name, content);
  }

}
