import { useEffect } from "react";
import styles from "./OffCanvasMenu.module.scss";

const OffCanvasMenu = ({ show, offCanvasBtnClick, children, className }) => {
  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <>
      <aside
        className={`${styles.aside} ${show ? styles.aside_active : ""} ${
          className ? className : ""
        }`}
      >
        {children}
      </aside>
      {show && (
        <div
          onClick={offCanvasBtnClick}
          className={`${styles.blurEffect} ${
            show ? styles.blurEffect_active : ""
          }`}
        ></div>
      )}
    </>
  );
};

export default OffCanvasMenu;
