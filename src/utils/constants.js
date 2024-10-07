const themes = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

const dbDefaultTables = {
  users: [],
  columns: [],
  rows: [],
};

const authMessages = {
  register: {
    success: "Congratulations 🥳. You have registered successfully",
    error: "You have already registered with this Username or Email !!",
  },
};

const yupMessages = {
  login: {
    identifier: {
      min: "Username/Email must be at least 3 characters !!",
      required: "Username/Email is required !!",
    },
    password: {
      min: "Password must be at least 8 characters !!",
      required: "Password is required !!",
    },
  },
  register: {
    firstname: {
      min: "firstname must be at least 3 characters !!",
      required: "firstname is required !!",
    },
    lastname: {
      min: "lastname must be at least 3 characters !!",
      required: "lastname is required !!",
    },
    username: {
      min: "username must be at least 3 characters !!",
      required: "username is required !!",
      pattern:
        "Username is not valid. Valid values are: john or john_doe or john_doe_john",
    },
    email: {
      min: "Email is not valid !!",
      required: "email is required !!",
      pattern: "Email is not valid !!",
    },
    password: {
      min: "password must be at least 8 characters !!",
      required: "password is required !!",
    },
  },
};

export { themes, dbDefaultTables, authMessages, yupMessages };
