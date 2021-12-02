import { NextFunction, Request, Response } from 'express';
import { Role, UserPrimitives } from '@frappe/account/domain';

export const authorizationMiddleware = (roles : Role[]) => async (req: Request, res: Response, next: NextFunction) => {
  if(roles.length === 0)
    next();
  
  //@ts-ignore : user exists in Request
  const user = req.user as UserPrimitives;

  console.log("user: ", user)

  if(user === undefined)
  {
    res.status(403).json();
    next();
  }
  console.log("validate role:", roles.some(role => role === user.role ))
  if(!roles.some(role => role === user.role ))
  {
    res.status(403).json();
    next();
  }
  
  console.log("tiene permisos")
  next();

}
