import { DeleteResult } from "typeorm";
import { Product } from "../../entities/Products";
import { User } from "../../entities/User";

interface InterfaceBuyCar {
  id: string;
  name: string;
  price: string;
  quant: number;
  user_owner: User;
  createdOn: Date;
  updatedOn: Date;
  productsList: Product[];
}

interface InterfaceBuyCarQuery {
  id?: string;
  name?: string;
  price?: string;
  quant?: string;
  user?: User;
  productsList?: Product[];
}

interface InterfaceBuyCarRepo {
  registerBuyCar: (shoppCar: InterfaceBuyCar) => Promise<InterfaceBuyCar>;
  getBuyCars: () => Promise<InterfaceBuyCar[]>;
  deleteBuyCar: (uuid: string) => Promise<DeleteResult>;
  getOneBuyCar: (id: string, relations?: string[]) => Promise<InterfaceBuyCar>;
  
}
export { InterfaceBuyCar, InterfaceBuyCarRepo, InterfaceBuyCarQuery };