import { useState } from 'react';

import AuthMenu from '@/components/AuthMenu';
import BrandLogo from '@/components/BrandLogo';
import IconMenu from '@/components/IconMenu';
import MainMenu from '@/components/MainMenu';

const Navbar = () => {
  const isLoggedIn = useState(false);

  return (
    <nav className='flex items-center justify-between'>
      <BrandLogo />

      <div className='hidden lg:block'>
        <MainMenu />
      </div>

      {isLoggedIn ? <AuthMenu /> : <IconMenu />}
    </nav>
  );
};

export default Navbar;
