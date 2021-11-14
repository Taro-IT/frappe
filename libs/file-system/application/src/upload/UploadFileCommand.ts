import {Command} from "@tshio/command-bus";

interface UploadFileCommandPayload {
  readonly name: string;
  readonly content: File;
}

export class UploadFileCommand implements Command<UploadFileCommandPayload> {
  readonly type = UploadFileCommand.name;

  constructor(
    readonly payload: UploadFileCommandPayload
  ) { }
}
