const themes = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

const dbDefaultTables = {
  users: [],
  columns: [],
  tasks: [],
};

const authMessages = {
  register: {
    success: "Congratulations 🥳. You have registered successfully",
    error: "You have already registered with this Username or Email !!",
  },
  login: {
    success: "You have logged in successfully",
    userNotFound: "User not found !!",
    invalidPasswordOrEmail: "Username/Email or Password is not valid !!",
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

const taskMessages = {
  remove: "Task removed successfully",
};

export { themes, dbDefaultTables, authMessages, yupMessages, taskMessages };
