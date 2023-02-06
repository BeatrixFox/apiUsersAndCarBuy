import { DeleteResult, UpdateResult } from "typeorm";

interface InterfaceUser {
  id: string;
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  createdOn: Date;
  updatedOn: Date;
}

interface InterfaceUserQuery {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
}

interface InterfaceUserRepo {
  registerUser: (user: InterfaceUser) => Promise<InterfaceUser>;
  getUsers: () => Promise<InterfaceUser[]>;
  deleteUser: (uuid: string) => Promise<DeleteResult>;
  getOneUser: (object: InterfaceUserQuery) => Promise<InterfaceUser>;
  updateUser: (object: InterfaceUserQuery, id: string) => Promise<UpdateResult>;
}
export { InterfaceUser, InterfaceUserRepo, InterfaceUserQuery };
