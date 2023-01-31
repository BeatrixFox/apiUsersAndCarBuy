import * as yup from "yup";
const required = "field required";
const userLoginSchema = yup.object().shape({
    email: yup.string().email("email in format invalid.").required(`${required} email.`),
    password: yup.string().required(`${required} password.`),
})
export default userLoginSchema;