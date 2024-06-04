import Logo from '@/assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';

const BrandLogo = () => {
  return (
    <Link to='/' className='w-28 h-16 flex items-center justify-center'>
      <img src={Logo} alt='BRAND-LOGO' />
    </Link>
  );
};

export default BrandLogo;
