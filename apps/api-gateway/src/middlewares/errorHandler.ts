import { Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response) => {
  console.log(err);
  
  res.status(500).json({error: err.message})
}