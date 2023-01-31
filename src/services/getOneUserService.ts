import { Request } from "express";
import { InterfaceUser } from "../repositories/user/interface";
import secureUserDataService from "./secureUserDataService";
import UserRepoData from "../repositories/user";

const getOneUserService = async (req: Request) => {
  try {
    const { id } = req.body;
    const userData: InterfaceUser = await new UserRepoData().getOneUser({
      id: id,
    });

    return {
      status: 200,
      body: secureUserDataService(userData),
    };
  } catch (err) {
    return {
      status: 400,
      body: err.message,
    };
  }
};
export default getOneUserService;
