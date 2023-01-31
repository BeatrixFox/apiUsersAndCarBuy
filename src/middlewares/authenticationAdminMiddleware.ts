import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { secrectKey } from "../configs";

const authenticationAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Missing authorization headers" });
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, secrectKey, (err, decoded: any) => {
      if (err) {
        return res.status(401).json({ message: "Invalid Token" });
      }
      if (!decoded.isAdm) {
        return res.status(401).json({ message: "Unauthorized" });
      }
    });

    return next();
  } catch (e: any) {
    return next(e);
  }
};
export default authenticationAdminMiddleware;
