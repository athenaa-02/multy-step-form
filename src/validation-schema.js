import * as yup from "yup";

const validationSchema = yup.object().shape({
    name: yup.string().required().min(2).max(30), 
    email: yup.string().email().required(),
    tel: yup.number().required()

})

export default validationSchema