import { InterfaceBuyCar } from "../../repositories/buyCar/interface";
import BuyCarRepoData from "../../repositories/buyCar";

const getBuyCarsService = async () => {
  try {
    const shoppingCars: InterfaceBuyCar[] = await new BuyCarRepoData().getBuyCars();
   
    return {
      status: 200,
      body: shoppingCars,
    };
  } catch (err: any) {
    return {
      status: 400,
      body: err.message,
    };
  }
};
export default getBuyCarsService;
