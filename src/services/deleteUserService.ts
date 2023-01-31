import { Request } from "express";
import UserRepoData from "../repositories/user";

const deleteUserService = async (req: Request) => {
  try {
    const { uuid } = req.params;
    const result = await new UserRepoData().deleteUser(uuid);

    return {
      status: 200,
      body: { message: "User deleted with success" },
    };
  } catch (err: any) {
    return {
      status: 400,
      body: err.message,
    };
  }
};
export default deleteUserService;
