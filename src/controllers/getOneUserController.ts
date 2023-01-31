import { Request, Response } from "express";
import { getOneUserService } from "../services";

const getOneUserController = async (req: Request, res: Response) =>{
    const { body,status } = await getOneUserService(req);
    return res.status(status).json(body);
};
export default getOneUserController;