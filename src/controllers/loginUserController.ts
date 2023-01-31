import { Request, Response } from "express";
import { loginUserService } from "../services";


const loginUserController = async (req: Request, res: Response) =>{
    const {status, body} = await loginUserService(req);
    res.status(status).json(body);
};
export default loginUserController;