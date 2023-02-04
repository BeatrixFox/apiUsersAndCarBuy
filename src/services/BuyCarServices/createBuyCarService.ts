import { Request } from "express";
import { InterfaceBuyCar } from "../../repositories/buyCar/interface";
import BuyCarRepoData from "../../repositories/buyCar";

const createBuyCarService = async (req: Request) => {
  try {
    const buyCarValidated = req.body.validated;
    const buyCarCreated: InterfaceBuyCar = await new BuyCarRepoData().registerBuyCar(
      buyCarValidated
    );

    return {
      status: 201,
      body: buyCarCreated,
    };
  } catch (err: any) {
    return {
      status: 400,
      body: {
        message: err.message,
      },
    };
  }
};
export default createBuyCarService;
