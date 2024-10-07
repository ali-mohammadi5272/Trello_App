import styles from "./Container.module.scss";

const Container = ({ children }) => {
  return <div className={styles.containers}>{children}</div>;
};

export default Container;
