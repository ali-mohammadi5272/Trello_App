import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";
import styles from "./Navbar.module.scss";
import { removeCookie } from "../../../utils/helperFunctions";
import swal from "sweetalert";

const Navbar = () => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    swal({
      title: "Log Out",
      text: "Log out?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((result) => {
      if (result) {
        removeCookie("currentUser");
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
    </dv>
  );
};

export default Navbar;
