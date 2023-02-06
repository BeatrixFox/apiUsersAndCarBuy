import * as yup from "yup";
import { v4 as uuidVersion } from "uuid";

const required = "field required";
const productSchema = yup.object().shape({
  uuid: yup.string().default(() => uuidVersion()),
  name: yup.string().required(`${required} name.`),
  quant: yup.number().required("Quantidade de produtos é necessário"),
  outfitter: yup.number().required("Number of outfitter required"), 
  createdOn: yup
    .date()
    .default(() => new Date())
    .transform((createdOn: Date) => createdOn.toDateString()),
  updatedOn: yup
    .date()
    .default(() => new Date())
    .transform((updatedOn: Date) => updatedOn.toDateString()),
});
export default productSchema;