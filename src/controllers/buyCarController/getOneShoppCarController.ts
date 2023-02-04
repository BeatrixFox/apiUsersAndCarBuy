import { Request, Response } from "express";
import { getOneBuyCarService } from "../../services/BuyCarServices";


const getOneShoppCarController = async (req: Request, res: Response) =>{
    const { body,status } = await getOneBuyCarService(req);
    return res.status(status).json(body);
};
export default getOneShoppCarController;