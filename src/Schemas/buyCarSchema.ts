import * as yup from "yup";
import { v4 as uuidVersion } from "uuid";

const required = "field required";
const buyCarSchema = yup.object().shape({
  uuid: yup.string().default(() => uuidVersion()),
  name: yup.string().required(`${required} name.`),
  price: yup.string().required("Price total required"), 
  quant: yup.number().required("Quantidade de produtos é necessário"),
  createdOn: yup
    .date()
    .default(() => new Date())
    .transform((createdOn: Date) => createdOn.toDateString()),
  updatedOn: yup
    .date()
    .default(() => new Date())
    .transform((updatedOn: Date) => updatedOn.toDateString()),
});
export default buyCarSchema;