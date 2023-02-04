import { Response, Request } from "express";
import { getProductsService } from "../../services/ProductServices";

const getProductsController = async (_: Request, res: Response) => {
  const { status, body } = await getProductsService();
  return res.status(status).json(body);
};
export default getProductsController;