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
      min: "Firstname must be at least 3 characters !!",
      required: "Firstname is required !!",
    },
    lastname: {
      min: "Lastname must be at least 3 characters !!",
      required: "Lastname is required !!",
    },
    username: {
      min: "Username must be at least 3 characters !!",
      required: "Username is required !!",
      pattern:
        "Username is not valid. Valid values are: john or john_doe or john_doe_john",
    },
    email: {
      min: "Email is not valid !!",
      required: "Email is required !!",
      pattern: "Email is not valid !!",
    },
    password: {
      min: "Password must be at least 8 characters !!",
      required: "Password is required !!",
    },
  },
};

export { themes, dbDefaultTables, authMessages, yupMessages };
