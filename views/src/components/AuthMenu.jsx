import { useNavigate } from 'react-router-dom';

import Button from './Button';

const AuthMenu = () => {
  const navigate = useNavigate();

  const gotoLogin = () => navigate('/login');
  const gotoRegister = () => navigate('/register');

  return (
    <>
      <div className='flex items-center gap-2'>
        <Button
          onClick={gotoLogin}
          className='bg-indigo-500 text-white px-5 py-3 rounded text-xs uppercase transition hover:bg-indigo-700'
        >
          Login
        </Button>

        <Button
          onClick={gotoRegister}
          className='bg-slate-500 text-white px-5 py-3 rounded text-xs uppercase transition hover:bg-slate-700'
        >
          Register
        </Button>
      </div>
    </>
  );
};

export default AuthMenu;
