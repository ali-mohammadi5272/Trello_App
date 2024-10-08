import { isFormEmpty } from "../../../utils/helperFunctions";
import FontAwesomeIcon from "../FontawesomeIcon/FontAwesomeIcon";
import styles from "./ColumnAndTaskCreator.module.scss";

const ColumnAndTaskCreator = ({ onSubmit, onChange, data, placeholder }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        value={data.value}
        onChange={onChange}
        type="text"
        className={styles.form__input}
        placeholder={placeholder}
      />
      <button
        disabled={isFormEmpty(data)}
        type="submit"
        className={styles.form__btn}
      >
        <FontAwesomeIcon icon="faPlus" />
      </button>
    </form>
  );
};

export default ColumnAndTaskCreator;
