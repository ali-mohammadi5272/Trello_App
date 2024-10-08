import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";
import styles from "./Navbar.module.scss";
import { removeCookie } from "../../../utils/helperFunctions";
import swal from "sweetalert";
import { AuthContext } from "../../../context/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(AuthContext);

  const logOutHandler = () => {
    swal({
      title: "Log Out",
      text: "Log out?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((result) => {
      if (result) {
        removeCookie("currentUser");
        setUser(null);
        navigate("/login");
      }
    });
  };

  return (
    <div className={styles.navbarContainer}>
      <Container>
        <nav className={`${styles.navbarContainer__navbar} ${styles.navbar}`}>
          <section className={styles.navbar__section}>
            <ToggleThemeBtn className={styles.navbar__togglThemeBtn} />
          </section>
          <section className={styles.navbar__section}>
            {user && (
              <h3 className={styles.navbar__user}>
                {user.firstname} {user.lastname}
              </h3>
            )}
            <button
              onClick={logOutHandler}
              className={styles.navbar__logoutBtn}
              to="/login"
            >
              Sign Out
            </button>
          </section>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
