import { Request } from "express";
import UserRepository from "../repositories/user";
import secureUserDataService from "./secureUserDataService";

const updateUserService = async (req: Request) => {
  try {
    const { uuid } = req.params;
    const user = await new UserRepository().getOneUser({ id: uuid });
    const body = req.body.validated;
    const result = await new UserRepository().updateUser(body, uuid);
    if (!result.affected) {
      return {
        status: 400,
        body: "not found user.",
      };
    }
    const userUpdated = { ...user, ...body };
    return {
      status: 200,
      body: secureUserDataService(userUpdated),
    };
  } catch (e: any) {
    return {
      status: 400,
      body: e.message,
    };
  }
};
export default updateUserService;
