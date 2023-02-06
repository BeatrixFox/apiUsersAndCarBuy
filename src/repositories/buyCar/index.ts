import { Repository, getRepository } from "typeorm";
import { BuyCar } from "../../entities/BuyCar";
import {
  InterfaceBuyCar,
  InterfaceBuyCarRepo,
} from "./interface";

class BuyCarRepoData implements InterfaceBuyCarRepo {
  private ormRepository: Repository<BuyCar>;
  constructor() {
    this.ormRepository = getRepository(BuyCar);
  }

  registerBuyCar = async (shoppCar: InterfaceBuyCar) => {
  return await this.ormRepository.save(shoppCar);
}

  getBuyCars = async () => await this.ormRepository.find();

  deleteBuyCar = async (id: string) => await this.ormRepository.delete(id);

  getOneBuyCar = (id: string, relationsWanted?: string[]) =>
  this.ormRepository.findOneOrFail(id, { relations: relationsWanted });
}

export default BuyCarRepoData;
