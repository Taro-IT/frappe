import { NextFunction, Request, Response } from 'express';
import { TokenAuthentication } from '@frappe/account/application';
import { wrapError } from '@frappe/common/utils';

export const authenticationMiddleware = (tokenAuthentication: TokenAuthentication) => async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers['authorization'];

  if (!authorization) {
    res.status(401).json({});
    next()
  }

  const token = authorization.split('bearer ')[0];
  if (!token) {
    res.status(401).json({});
    next()
  }

  const [error, user] = await wrapError(tokenAuthentication.execute(token));
  if (error !== null) {
    res.status(401).json({});
    next()
  }

  // @ts-ignore: add customer property to request
  req.user = user;
  next();
}
