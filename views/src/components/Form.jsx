const Form = ({ action, method, className, children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      action={action}
      method={method}
      className={className}
    >
      {children}
    </form>
  );
};

export default Form;
