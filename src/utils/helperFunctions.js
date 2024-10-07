import { toast } from "react-toastify";

const setCookie = (cookie) => {
  const { key, value, maxAge, path } = cookie;

  document.cookie = `${key}=${value}; max-age=${maxAge}; path=${path}`;
};

const getLocalStorageData = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};

const setLocalStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const createUser = (data) => {
  const user = {
    id: crypto.randomUUID() + Date.now(),
    ...data,
  };
  return user;
};

const isUserExistBeforeInDB = (db, newUser) => {
  const isUserExistBefore = !!db.users.find(
    (user) => user.username === newUser.username || user.email === newUser.email
  );
  return isUserExistBefore;
};

const showErrors = (errorsObject) => {
  const errors = Object.entries(errorsObject).map(([_, value]) => ({
    message: value,
  }));
  errors.forEach((error) => toast.error(error.message));
};

const isFormEmpty = (dataObject) => {
  const isNotEmpty = Object.entries(dataObject).some(([_, value]) =>
    value.trim()
  );
  return !isNotEmpty;
};

const yupParsedErrors = (err) => {
  const parsedErrors = err.inner.reduce(
    (prev, current) => ({
      ...prev,
      [current.path]: current.message,
    }),
    {}
  );
  return parsedErrors;
};

const removeCookie = (key) => {
  setCookie({
    key,
    value: "",
    maxAge: 0,
    path: "/",
  });
};

const getCookie = (key) => {
  const cookie = document.cookie.split(`${key}=`)[1];
  return cookie;
};

const getUserByIdFromDB = (id) => {
  const { users } = getLocalStorageData("db");
  const user = users.find((user) => user.id === id);
  return user;
};

export {
  setCookie,
  getLocalStorageData,
  setLocalStorageData,
  createUser,
  isUserExistBeforeInDB,
  showErrors,
  isFormEmpty,
  yupParsedErrors,
  removeCookie,
  getCookie,
  getUserByIdFromDB,
};
