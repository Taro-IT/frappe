import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  
  res.status(500).json({error: err.message})
  _next()
}