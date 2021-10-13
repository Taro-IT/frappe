import {CommandHandler} from "@tshio/command-bus";
import {UploadFileCommand} from "./UploadFileCommand";
import {FileUploader} from "./FileUploader";

type Props = {
  readonly fileUploader: FileUploader
}

/*
 *
*/

export class UploadFileCommandHandler implements CommandHandler<UploadFileCommand> {
  private readonly fileUploader: FileUploader;

  readonly commandType = UploadFileCommand.name;

  constructor({ fileUploader }: Props) {
    this.fileUploader = fileUploader;
  }

  async execute(command: UploadFileCommand) {
    const { name, content } = command.payload;
    
    return this.fileUploader.execute(name, content);
  }

}
