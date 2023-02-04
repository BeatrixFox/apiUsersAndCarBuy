import { Response, Request } from "express";
import { getBuyCarsService } from "../../services/BuyCarServices";

const getBuyCarController = async (_: Request, res: Response) => {
  const { body,status } = await getBuyCarsService();
  return res.status(status).json(body);
};
export default getBuyCarController;


