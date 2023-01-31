import * as yup from "yup";
import bycrpt from "bcrypt";

const userUpdateSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("email in format invalid."),
  password: yup
    .string()
    .transform((password: string) => bycrpt.hashSync(password, 10)),
  updatedOn: yup
    .date()
    .default(() => new Date())
    .transform((updatedOn: Date) => updatedOn.toDateString()),
});
export default userUpdateSchema;
