import { InterfaceUser } from "../repositories/user/interface";

const secureUserDataService = (user: InterfaceUser) => {
  const newUser = { ...user };
  /**
   * Receber objeto user e retornar ele sem o password
   */
  delete newUser.password;
  const uuid = newUser.id;
  delete newUser.id;
  newUser["uuid"] = uuid;
  return newUser;
};
export default secureUserDataService;
