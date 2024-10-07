import * as Yup from "yup";
import { yupMessages } from "../constants";
import { usernamePattern } from "../patterns";

const { email, firstname, lastname, password, username } = yupMessages.register;

const registerSchema = Yup.object().shape({
  firstname: Yup.string().min(3, firstname.min).required(firstname.required),

  lastname: Yup.string().min(3, lastname.min).required(lastname.required),

  username: Yup.string()
    .min(3, username.min)
    .required(username.required)
    .matches(usernamePattern, username.pattern),

  email: Yup.string()
    .min(5, email.min)
    .email(email.pattern)
    .required(email.required),

  password: Yup.string().min(8, password.min).required(password.required),
});

export default registerSchema;
