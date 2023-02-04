import { Repository, getRepository } from "typeorm";
import { Product } from "../../entities/Products";
import {
  InterfaceProduct,
  InterfaceProductRepo,
} from "./interface";

class ProductRepoData implements InterfaceProductRepo {
  private ormRepository: Repository<Product>;
  constructor() {
    this.ormRepository = getRepository(Product);
  }


  registerProduct = async (shoppCar: InterfaceProduct) => await this.ormRepository.save(shoppCar);

  getProducts = async () => await this.ormRepository.find();

  deleteProduct = async (id: string) => await this.ormRepository.delete(id);

  getOneProduct = (id: string, relationsWanted?: string[]) =>
  this.ormRepository.findOneOrFail(id, { relations: relationsWanted });
}

export default ProductRepoData;

