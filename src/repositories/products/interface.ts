import { DeleteResult } from "typeorm";
import { BuyCar } from "../../entities/BuyCar";
import { Product } from "../../entities/Products";

interface InterfaceProduct {
  id: string;
  name: string;
  quant: number;
  outfitter: number;
  shopp_car_owner: BuyCar;

}

interface InterfaceProductQuery {
  id?: string;
  name?: string;
  quant?: number;
  outfitter?: number;
  shopp_car_owner?: BuyCar;

}

interface InterfaceProductRepo {
  registerProduct: (shoppCar: InterfaceProduct) => Promise<InterfaceProduct>;
  getProducts: () => Promise<Product[]>;
  deleteProduct: (uuid: string) => Promise<DeleteResult>;
  getOneProduct: (id: string, relations?: string[]) => Promise<Product>;
  
}
export { InterfaceProduct, InterfaceProductRepo, InterfaceProductQuery };