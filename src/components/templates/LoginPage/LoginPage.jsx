import styles from "./LoginPage.module.scss";
import ToggleThemeBtn from "../../modules/ToggleThemeBtn/ToggleThemeBtn";
import { Link, useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import { dbDefaultTables, authMessages } from "../../../utils/constants";
import CustomForm from "../../modules/CustomForm/CustomForm";
import loginSchema from "../../../utils/validators/login";
import {
  getLocalStorageData,
  isFormEmpty,
  setCookie,
  showErrors,
  yupParsedErrors,
} from "../../../utils/helperFunctions";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.title = "Login";
  }, []);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (isFormEmpty(formData)) {
      return;
    }

    try {
      const validateData = await loginSchema.validate(formData, {
        abortEarly: false,
        stripUnknown: true,
      });

      const db = getLocalStorageData("db") || dbDefaultTables;
      const user = db.users.find(
        (user) =>
          user.username === validateData.identifier ||
          user.email === validateData.identifier
      );
      if (!user) {
        toast.error(authMessages.login.userNotFound);
        return;
      }

      const isValidPassword = user.password === validateData.password;
      if (!isValidPassword) {
        toast.error(authMessages.login.invalidPasswordOrEmail);
        return;
      }

      const oneHour = 60 * 60;
      setCookie({
        key: "currentUser",
        value: user.id,
        maxAge: oneHour,
        path: "/",
      });

      toast.success(authMessages.login.success);

      navigate("/", { replace: true });
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
      key: "identifier",
      placeholder: "Username/Email",
      minLength: 3,
      required: true,
      onChange: inputChangeHandler,
    },
    {
      id: 2,
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
      <h1 className={styles.page__title}>Login</h1>
      <CustomForm
        onSubmit={formSubmitHandler}
        inputs={inputs}
        data={formData}
      />
      <div className={styles.page__linkSection}>
        <span>Have not Account ? </span>
        <Link className={styles.page__link} to="/register">
          Sign Up
        </Link>
      </div>
      <ToggleThemeBtn className={styles.page__toggleThemBtn} />
    </main>
  );
};

export default LoginPage;
