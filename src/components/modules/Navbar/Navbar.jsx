import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";
import styles from "./Navbar.module.scss";
import { removeCookie } from "../../../utils/helperFunctions";
import swal from "sweetalert";
import { AuthContext } from "../../../context/AuthProvider";
import { useContext, useState } from "react";
import OffCanvasMenu from "../OffCanvasMenu/OffCanvasMenu";
import FontAwesomeIcon from "../FontawesomeIcon/FontAwesomeIcon";

const Navbar = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(AuthContext);
  const [showOfCanvas, setShowOfCanvas] = useState(false);

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

  const offCanvasMenuHnadler = () => {
    setShowOfCanvas((prev) => !prev);
  };

  return (
    <>
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
              <button
                onClick={offCanvasMenuHnadler}
                className={styles.navbar__offCanvasBtn}
              >
                <FontAwesomeIcon icon="faBars" />
              </button>
            </section>
          </nav>
        </Container>
      </div>
      <OffCanvasMenu
        show={showOfCanvas}
        offCanvasBtnClick={offCanvasMenuHnadler}
        className={styles.offCanvasMenuContainer}
      >
        <div className={styles.offCanvasMenu}>
          <header className={styles.offCanvasMenu__header}>
            {user && (
              <h3 className={styles.offCanvasMenu__user}>
                {user.firstname} {user.lastname}
              </h3>
            )}
            <button
              onClick={offCanvasMenuHnadler}
              className={styles.offCanvasMenu__closeOffCanvasBtn}
            >
              <FontAwesomeIcon icon="faXmark" />
            </button>
          </header>
          <button
            onClick={logOutHandler}
            className={styles.offCanvasMenu__logoutBtn}
            to="/login"
          >
            Sign Out
          </button>
        </div>
      </OffCanvasMenu>
    </>
  );
};

export default Navbar;
