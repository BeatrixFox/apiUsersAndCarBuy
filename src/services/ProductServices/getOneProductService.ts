import { Request } from "express";
import ProductRepoData from "../../repositories/products";
import { InterfaceProduct } from "../../repositories/products/interface";

const getOneProductService = async (req: Request) => {
  try {
    const { id } = req.params;
    const productInfo: InterfaceProduct = await new ProductRepoData().getOneProduct(id);

    return {
      status: 200,
      body: productInfo,
    };
  } catch (err) {
    return {
      status: 400,
      body: err.message,
    };
  }
};
export default getOneProductService;
