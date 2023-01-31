import { Response, Request } from "express";

const getBuyCarController = async (_: Request, res: Response) => {
  return res.json("oi Sou Um carrinho");
};
export default getBuyCarController;