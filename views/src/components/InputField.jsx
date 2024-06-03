const InputField = ({
  type,
  id,
  className,
  required,
  onChange,
  value,
  disabled,
}) => {
  return (
    <input
      type={type}
      id={id}
      className={className}
      onChange={onChange}
      value={value}
      required={required}
      disabled={disabled}
    />
  );
};

export default InputField;
