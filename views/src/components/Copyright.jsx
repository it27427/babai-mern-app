const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <p className='text-center font-medium text-slate-800'>
      Copyright &copy; {currentYear} All rights reserved by Babai.
    </p>
  );
};

export default Copyright;
