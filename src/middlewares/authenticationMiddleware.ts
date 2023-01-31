import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { secrectKey } from "../configs";

const authenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { uuid } = req.params;
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Missing authorization" });
    }
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, secrectKey, (err, decoded: any) => {
      if (err) {
        return res.status(401).json({ message: "Invalid Token" });
      }
      if (uuid) {
        if (uuid !== decoded.id && !decoded.isAdm) {
          return res.status(401).json({ message: "Missing admin permissions" });
        }
      }
      req.body.id = decoded.id;
    });
    return next();
  } catch (err: any) {
    return next(err);
  }
};
export default authenticationMiddleware;
