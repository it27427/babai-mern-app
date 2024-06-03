import Navbar from '@/components/Navbar';

const Header = () => {
  return (
    <header className='sticky top-0 left-0 w-full z-50 bg-slate-950 shadow-md'>
      <div className='container'>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
