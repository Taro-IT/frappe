import multer from 'multer'

export const fileIntersectorMiddleware = (fileName: string) => multer().single(fileName);