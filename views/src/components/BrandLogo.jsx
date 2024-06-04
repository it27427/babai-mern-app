import { Link } from 'react-router-dom';

import Logo from '@/assets/images/logo/logo.svg';

const BrandLogo = () => {
  return (
    <Link to='/' className='w-28 h-12 flex items-center justify-center'>
      <img src={Logo} alt='BRAND-LOGO' className='w-full h-full object-cover' />
    </Link>
  );
};

export default BrandLogo;
