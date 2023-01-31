import { Request, Response, NextFunction } from "express";
import UserRepoData from "../repositories/user";
import { InterfaceUser } from "../repositories/user/interface";

const userExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const users: InterfaceUser[] = await new UserRepoData().getUsers();

    const foundUser = users.find((user) => user.email === email);

    if (foundUser) {
      return res.status(400).json({
        message: "E-mail already registered",
      });
    }
    return next();
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
export default userExistMiddleware;
