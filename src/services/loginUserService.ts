import jwt from "jsonwebtoken";
import UserRepository from "../repositories/user";
import { Request, Response } from "express";
import { expiresIn, secrectKey } from "../configs";
import { InterfaceUser } from "../repositories/user/interface";
import bcrypt from "bcrypt";

const loginUserService = async (req: Request) => {
  try {
    const { email, password } = req.body.validated;
    const user: InterfaceUser = await new UserRepository().getOneUser({
      email: email,
    });

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return {
        status: 401,
        body: {
          message: "Wrong email/password",
        },
      };
    }
    const token = jwt.sign({ id: user.id, isAdm: user.isAdm }, secrectKey, {
      expiresIn: expiresIn,
    });

    return {
      status: 200,
      body: { token: token },
    };
  } catch (e: any) {
    return {
      status: 401,
      body: {
        message: e.message,
      },
    };
  }
};
export default loginUserService;
