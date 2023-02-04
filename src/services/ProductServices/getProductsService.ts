import ProductRepoData from "../../repositories/products";
import { InterfaceProduct } from "../../repositories/products/interface";

const getProductsService = async () => {
  try {
    const productList: InterfaceProduct[] = await new ProductRepoData().getProducts();

    return {
      status: 200,
      body: productList,
    };
  } catch (err: any) {
    return {
      status: 400,
      body: err.message,
    };
  }
};
export default getProductsService;
