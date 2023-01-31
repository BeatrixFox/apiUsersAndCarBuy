import { Repository, getRepository } from "typeorm";
import { User } from "../../entities/User";
import {
  InterfaceUser,
  InterfaceUserQuery,
  InterfaceUserRepo,
} from "./interface";

class UserRepoData implements InterfaceUserRepo {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }

  registerUser = async (user: InterfaceUser) => {
    return await this.ormRepository.save(user);
  };
  getUsers = async () => {
    return await this.ormRepository.find();
  };
  deleteUser = async (id: string) => {
    return await this.ormRepository.delete(id);
  };
  getOneUser = async (object: InterfaceUserQuery) => {
    return await this.ormRepository.findOneOrFail({ ...object });
  };
  updateUser = async (object: InterfaceUserQuery, id: string) => {
    return await this.ormRepository
      .createQueryBuilder()
      .update(User)
      .set({ ...object })
      .where("id=:id", { id: id })
      .execute();
  };
}

export default UserRepoData;
