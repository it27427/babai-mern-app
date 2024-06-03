const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <p className='text-center font-medium'>
      Copyright &copy; {currentYear} All rights reserved by Babai.
    </p>
  );
};

export default Copyright;
