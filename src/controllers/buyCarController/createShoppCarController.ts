import { Response, Request } from "express";
import { createBuyCarService } from "../../services/BuyCarServices";

const createShoppCarController = async (req: Request, res: Response) => {
  const { status, body } = await createBuyCarService(req);
  
  res.status(status).json(body);
};
export default createShoppCarController;