import { Response, Request } from "express";
import { deleteBuyCarService } from "../../services/BuyCarServices";

const deleteShoppCarController = async (req: Request, res: Response) =>{
    const { status, body } = await deleteBuyCarService(req);
    return res.status(status).json(body)
};
export default deleteShoppCarController;