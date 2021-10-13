import {CommandBus} from "@tshio/command-bus";
import {NextFunction, RequestHandler} from "express";
import {UploadFileCommand} from "@frappe/file-system/application";
import {Uuid} from "@frappe/common/value-object";

export const uploadFileCommandHandler = (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    //@ts-ignore: Because file already exists in multer request
    const content = req.file
    const name = Uuid.create().value + "." + content.originalname.split('.').pop();
    try {
      //@ts-ignore: Because file already exists in multer request
      await commandBus.execute(new UploadFileCommand({ name, content: req.file}));
      res.status(201).json({ name });
      
    } catch (error) {
      next(error)
    }
    
  }
