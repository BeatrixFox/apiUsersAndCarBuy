import { Request } from "express";
import { InterfaceBuyCar } from "../../repositories/buyCar/interface";
import BuyCarRepoData from "../../repositories/buyCar";
import UserRepoData from "../../repositories";
import secureUserDataService from "../secureUserDataService";

const createBuyCarService = async (req: Request) => {
  try {
    const id = req.body.uuid
    const userOwner = await new UserRepoData().getOneUser({id : id});
    const buyCarValidated = req.body.validated;

    buyCarValidated.id_user_owner = secureUserDataService(userOwner)
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
