import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.page__title}>404</h1>
      <p className={styles.page__description}>Page not found</p>
      <Link className={styles.page__link} to="/login">
        Login
      </Link>
    </div>
  );
};

export default NotFoundPage;
