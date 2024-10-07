const CustomInput = ({
  labelClassName,
  placeholderClassName,
  placeholder,
  inputClassName,
  type,
  dataKey,
  minLength,
  required,
  onChange,
}) => {
  return (
    <label className={labelClassName}>
      <span className={placeholderClassName}>{placeholder}</span>
      <input
        className={inputClassName}
        type={type}
        data-key={dataKey}
        minLength={minLength}
        required={required}
        onChange={onChange}
      />
    </label>
  );
};

export default CustomInput;
