const TextArea = ({
  name,
  className,
  id,
  placeholder,
  required,
  onChange,
  value,
}) => {
  return (
    <textarea
      name={name}
      id={id}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete='off'
      rows='5'
      required={required}
    ></textarea>
  );
};

export default TextArea;
