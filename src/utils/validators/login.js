import * as Yup from "yup";

import { yupMessages } from "../constants";

const { identifier, password } = yupMessages.login;

const loginSchema = Yup.object().shape({
  identifier: Yup.string().min(3, identifier.min).required(identifier.required),
  password: Yup.string().min(8, password.min).required(password.required),
});

export default loginSchema;
