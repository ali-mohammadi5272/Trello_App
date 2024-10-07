import CustomInput from "../CustomInput/CustomInput";
import styles from "./CustomForm.module.scss";
import { isFormEmpty } from "../../../utils/helperFunctions";

const CustomForm = ({ onSubmit, inputs, className, data }) => {
  return (
    <form
      className={className ? `${styles.form} ${className}` : styles.form}
      onSubmit={onSubmit}
    >
      {inputs.map((input) => (
        <CustomInput
          key={input.id}
          labelClassName={styles.form__label}
          inputClassName={styles.form__input}
          placeholderClassName={styles.form__inputPlaceholder}
          type={input.type}
          minLength={input.minLength}
          required={input.required}
          dataKey={input.key}
          placeholder={input.placeholder}
          onChange={input.onChange}
        />
      ))}
      <button
        disabled={isFormEmpty(data)}
        className={styles.form__submitBtn}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
