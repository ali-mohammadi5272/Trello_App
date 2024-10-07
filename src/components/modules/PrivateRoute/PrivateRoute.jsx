import { Navigate } from "react-router-dom";
import { getCookie, getUserByIdFromDB } from "../../../utils/helperFunctions";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const cookie = getCookie("currentUser");
  const findedUser = getUserByIdFromDB(cookie);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    if (findedUser && !user) {
      setUser(findedUser);
    }
  }, []);

  return cookie && findedUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
