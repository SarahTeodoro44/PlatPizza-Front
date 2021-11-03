import * as yup from "yup";

 export const userSchema = yup.object().shape({
    nameVM: yup.string().required(),
})