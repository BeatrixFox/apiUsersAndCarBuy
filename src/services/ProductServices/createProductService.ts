import { Request } from "express";
import ProductRepoData from "../../repositories/products";
import { InterfaceProduct } from "../../repositories/products/interface";

const createProductService = async (req: Request) => {
  try {
    const productValidated = req.body.validated;
    const productCreated: InterfaceProduct = await new ProductRepoData().registerProduct(
      productValidated
    );

    return {
      status: 201,
      body: productCreated,
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
export default createProductService;
