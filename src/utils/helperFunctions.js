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

export {
  setCookie,
  getLocalStorageData,
  setLocalStorageData,
  createUser,
  isUserExistBeforeInDB,
  showErrors,
  isFormEmpty,
};
