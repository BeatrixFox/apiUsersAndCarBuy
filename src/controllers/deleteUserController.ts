import { Request, Response } from "express";
import { deleteUserService } from "../services";

const deleteUserController = async (req: Request, res: Response) =>{
    const { status, body } = await deleteUserService(req);
    return res.status(status).json(body)
}
export default deleteUserController;