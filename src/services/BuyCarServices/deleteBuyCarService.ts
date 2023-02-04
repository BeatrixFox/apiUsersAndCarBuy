import { Request } from "express";
import BuyCarRepoData from "../../repositories/buyCar";

const deleteBuyCarService = async (req: Request) => {
  try {
    const { uuid } = req.params;
    const result = await new BuyCarRepoData().deleteBuyCar(uuid);

    return {
      status: 200,
      body: { message: "ShoppCar deleted with success" },
    };
  } catch (err: any) {
    return {
      status: 400,
      body: err.message,
    };
  }
};
export default deleteBuyCarService;
