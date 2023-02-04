import { Request } from "express";
import ProductRepoData from "../../repositories/products";

const deleteProductService = async (req: Request) => {
  try {
    const { uuid } = req.params;
    const result = await new ProductRepoData().deleteProduct(uuid);

    return {
      status: 200,
      body: { message: "Product deleted with success" },
    };
  } catch (err: any) {
    return {
      status: 400,
      body: err.message,
    };
  }
};
export default deleteProductService;
