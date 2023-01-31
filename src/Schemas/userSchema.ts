import * as yup from "yup";
import bycrpt from "bcrypt";
import { v4 as uuidVersion } from "uuid";

const required = "field required";
const userSchema = yup.object().shape({
  uuid: yup.string().default(() => uuidVersion()),
  name: yup.string().required(`${required} name.`),
  email: yup
    .string()
    .email("email in format invalid.")
    .required(`${required} email.`),
  password: yup
    .string()
    .required(`${required} password.`)
    .transform((password: string) => bycrpt.hashSync(password, 10)),
  isAdm: yup.bool().required(`${required} isAdm.`),
  createdOn: yup
    .date()
    .default(() => new Date())
    .transform((createdOn: Date) => createdOn.toDateString()),
  updatedOn: yup
    .date()
    .default(() => new Date())
    .transform((updatedOn: Date) => updatedOn.toDateString()),
});
export default userSchema;
