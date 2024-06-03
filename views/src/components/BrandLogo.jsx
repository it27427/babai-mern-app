import Logo from '@/assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';

const BrandLogo = () => {
  return (
    <Link to='/'>
      <img src={Logo} alt='BRAND-LOGO' />
    </Link>
  );
};

export default BrandLogo;
