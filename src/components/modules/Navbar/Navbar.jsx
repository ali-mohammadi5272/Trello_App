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
import User from "../User/User";
import Button from "../Button/Button";

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
              <User user={user} className={styles.navbar__user} />
              <Button
                onClick={logOutHandler}
                className={styles.navbar__logoutBtn}
                title="Sign Out"
              />
              <Button
                onClick={offCanvasMenuHnadler}
                className={styles.navbar__offCanvasBtn}
                title={<FontAwesomeIcon icon="faBars" />}
              />
            </section>
          </nav>
        </Container>
      </div>
      <OffCanvasMenu
        show={showOfCanvas}
        offCanvasBtnClick={offCanvasMenuHnadler}
      >
        <div className={styles.offCanvasMenu}>
          <header className={styles.offCanvasMenu__header}>
            <User user={user} className={styles.offCanvasMenu__user} />
            <Button
              onClick={offCanvasMenuHnadler}
              title={<FontAwesomeIcon icon="faXmark" />}
            />
          </header>
          <Button
            onClick={logOutHandler}
            className={styles.offCanvasMenu__logoutBtn}
            title="Sign Out"
          />
        </div>
      </OffCanvasMenu>
    </>
  );
};

export default Navbar;
