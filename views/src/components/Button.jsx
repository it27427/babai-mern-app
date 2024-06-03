const Button = ({ onClick, children, className, type = 'button' }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
