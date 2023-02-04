import { Request, Response } from "express";
import { createProductService } from "../../services/ProductServices";

const addProductCarListController = async (req: Request, res: Response) => {
  const { status, body } = await createProductService(req);

  res.status(status).json(body);
};
export default addProductCarListController;