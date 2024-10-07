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

export { setCookie, getLocalStorageData, setLocalStorageData, createUser };
