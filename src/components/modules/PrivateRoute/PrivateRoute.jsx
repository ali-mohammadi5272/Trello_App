import { Navigate } from "react-router-dom";
import { getCookie, getUserByIdFromDB } from "../../../utils/helperFunctions";
import { useContext, useLayoutEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const [isLogedIn, setIsLoggedIn] = useState(true);
  const { setUser } = useContext(AuthContext);

  useLayoutEffect(() => {
    const cookie = getCookie("currentUser");
    try {
      if (!cookie) {
        setIsLoggedIn(false);
      }
      const findedUser = getUserByIdFromDB(cookie);
      if (!findedUser) {
        setIsLoggedIn(false);
      }
      setUser(findedUser);
    } catch (error) {
      setIsLoggedIn(false);
    }
  }, []);

  return isLogedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
