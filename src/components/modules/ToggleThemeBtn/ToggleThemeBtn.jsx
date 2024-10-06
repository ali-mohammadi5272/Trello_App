import { useContext } from "react";
import { themes } from "../../../utils/constants";
import { ThemeContext } from "../../../context/ThemeProvider";
import styles from "./ToggleThemeBtn.module.scss";
import FontAwesomeIcon from "../FontawesomeIcon/FontAwesomeIcon";

const ToggleThemeBtn = ({ className }) => {
  const { theme, setThemeDark, setThemeLight } = useContext(ThemeContext);

  const changeThemeHandler = () => {
    theme === themes.DARK ? setThemeLight() : setThemeDark();
  };

  return (
    <button
      onClick={changeThemeHandler}
      className={
        className
          ? `${styles.toggleThemeBtn} ${className}`
          : styles.toggleThemeBtn
      }
    >
      <FontAwesomeIcon icon={theme === themes.DARK ? "faSun" : "faMoon"} />
    </button>
  );
};

export default ToggleThemeBtn;
