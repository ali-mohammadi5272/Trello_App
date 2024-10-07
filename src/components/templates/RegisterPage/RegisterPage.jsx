import styles from "./RegisterPage.module.scss";
import ToggleThemeBtn from "../../modules/ToggleThemeBtn/ToggleThemeBtn";
import { Link, useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import { dbDefaultTables, authMessages } from "../../../utils/constants";
import CustomForm from "../../modules/CustomForm/CustomForm";
import {
  createUser,
  getLocalStorageData,
  isFormEmpty,
  isUserExistBeforeInDB,
  setCookie,
  setLocalStorageData,
  showErrors,
  yupParsedErrors,
} from "../../../utils/helperFunctions";
import registerSchema from "../../../utils/validators/register";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.title = "Sign Up";
  }, []);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (isFormEmpty(formData)) {
      return;
    }

    try {
      const validateData = await registerSchema.validate(formData, {
        abortEarly: false,
        stripUnknown: true,
      });

      const db = getLocalStorageData("db") || dbDefaultTables;
      const newUser = createUser(validateData);
      const isUserExistBefore = isUserExistBeforeInDB(db, newUser);

      if (isUserExistBefore) {
        toast.error(authMessages.register.error);
      } else {
        db.users.push(newUser);
        setLocalStorageData("db", db);

        const oneHour = 60 * 60;
        setCookie({
          key: "currentUser",
          value: newUser.id,
          maxAge: oneHour,
          path: "/",
        });

        toast.success(authMessages.register.success);
        navigate("/", { replace: true });
      }
    } catch (err) {
      const errors = yupParsedErrors(err);
      showErrors(errors);
    }
  };

  const inputChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.dataset.key]: e.target.value,
    }));
  };

  const inputs = [
    {
      id: 1,
      type: "text",
      key: "firstname",
      placeholder: "Firstname",
      minLength: 3,
      required: true,
      onChange: inputChangeHandler,
    },
    {
      id: 2,
      type: "text",
      key: "lastname",
      placeholder: "Lastname",
      minLength: 3,
      required: true,
      onChange: inputChangeHandler,
    },
    {
      id: 3,
      type: "text",
      key: "username",
      placeholder: "Username",
      minLength: 3,
      required: true,
      onChange: inputChangeHandler,
    },
    {
      id: 4,
      type: "email",
      key: "email",
      placeholder: "Email",
      minLength: 5,
      required: true,
      onChange: inputChangeHandler,
    },
    {
      id: 5,
      type: "password",
      key: "password",
      placeholder: "Password",
      minLength: 8,
      required: true,
      onChange: inputChangeHandler,
    },
  ];

  return (
    <main className={styles.page}>
      <h1 className={styles.page__title}>Register</h1>
      <CustomForm
        onSubmit={formSubmitHandler}
        inputs={inputs}
        data={formData}
      />
      <div className={styles.page__linkSection}>
        <span>Already registered? </span>
        <Link className={styles.page__link} to="/login">
          Sign In
        </Link>
      </div>
      <ToggleThemeBtn className={styles.page__toggleThemBtn} />
    </main>
  );
};

export default RegisterPage;
