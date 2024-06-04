import { useState } from 'react';

import BrandLogo from '@/components/BrandLogo';

const Navbar = () => {
  const isLoggedIn = useState(false);

  return (
    <nav className='flex items-center justify-between'>
      <BrandLogo />
    </nav>
  );
};

export default Navbar;
