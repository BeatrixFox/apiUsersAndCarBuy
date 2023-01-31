import { Request, Response } from "express";
import { updateUserService } from "../services";

const updateUserController = async (req: Request,res: Response) =>{
    const { status, body } = await updateUserService(req);
    return res.status(status).json(body);
};
export default updateUserController;