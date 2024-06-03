const InputField = ({
  type,
  id,
  name,
  className,
  required,
  onChange,
  value,
  disabled,
  placeholder,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
      disabled={disabled}
      autoComplete='off'
    />
  );
};

export default InputField;
