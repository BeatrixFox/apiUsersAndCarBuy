import { Request, Response } from "express";
import { createUserService } from "../services";

const createUserController = async (req: Request, res: Response) => {
  const { status, body } = await createUserService(req);

  res.status(status).json(body);
};
export default createUserController;
