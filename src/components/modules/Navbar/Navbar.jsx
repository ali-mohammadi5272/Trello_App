import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";
import styles from "./Navbar.module.scss";
import { logOut } from "../../../utils/helperFunctions";
import swal from "sweetalert";

const Navbar = () => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    swal({
      title: "Log Out",
      text: "Log out?",
      icon: "warning",
      buttons: ["Yes", "No"],
    }).then((result) => {
      if (result) {
        logOut();
        navigate("/login");
      }
    });
  };

  return (
    <dv className={styles.navbarContainer}>
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
