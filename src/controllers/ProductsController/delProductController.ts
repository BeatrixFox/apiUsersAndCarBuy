import { Request, Response } from "express";
import { deleteProductService } from "../../services/ProductServices";

const delProductController = async (req: Request, res: Response) =>{
   const { status, body } = await deleteProductService(req);
   return res.status(status).json(body)
}
export default delProductController;