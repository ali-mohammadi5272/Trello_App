import styles from "./Button.module.scss";

const CustomButton = ({ onClick, className, title }) => {
  return (
    <button
      onClick={onClick}
      className={className ? `${styles.button} ${className}` : styles.button}
    >
      {title}
    </button>
  );
};

export default CustomButton;
