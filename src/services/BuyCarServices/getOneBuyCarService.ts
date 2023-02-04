import { Request } from "express";
import { InterfaceBuyCar } from "../../repositories/buyCar/interface";
import BuyCarRepoData from "../../repositories/buyCar";

const getOneBuyCarService = async (req: Request) => {
  try {
    const { id } = req.params;
    const shoppCar: InterfaceBuyCar = await new BuyCarRepoData().getOneBuyCar(id);

    return {
      status: 200,
      body: shoppCar,
    };
  } catch (err) {
    return {
      status: 400,
      body: err.message,
    };
  }
};
export default getOneBuyCarService;
