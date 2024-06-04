import { Link } from 'react-router-dom';

import DefaultLayout from '@/layouts/DefaultLayout';

import Logo from '@/assets/images/logo/authlogo.svg';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <DefaultLayout>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <figure className='w-24 h-20 flex items-center justify-center'>
            <img
              src={Logo}
              alt='BRAND-LOGO'
              className='w-full h-full object-cover'
            />
          </figure>
          <h1 className='uppercase font-bold text-2xl'>Login</h1>
        </div>

        <div className='w-full md:max-w-md mx-auto'>
          <LoginForm />
        </div>

        <p className='text-center font-medium text-slate-700'>
          Don't have any account?{' '}
          <Link
            to='/register'
            className='font-semibold text-indigo-400 underline transition hover:text-indigo-600 hover:no-underline'
          >
            Register
          </Link>
        </p>
      </div>
    </DefaultLayout>
  );
};

export default Login;
