import { Request } from "express";
import UserRepoData from "../repositories/user";
import { InterfaceUser } from "../repositories/user/interface";
import { secureUserDataService } from "../services";

const createUserService = async (req: Request) => {
  try {
    const userValidated = req.body.validated;
    const userCreated: InterfaceUser = await new UserRepoData().registerUser(
      userValidated
    );

    return {
      status: 201,
      body: secureUserDataService(userCreated),
    };
  } catch (err: any) {
    return {
      status: 400,
      body: {
        message: err.message,
      },
    };
  }
};
export default createUserService;
