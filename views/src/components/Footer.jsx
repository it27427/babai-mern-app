import Copyright from '@/components/Copyright';
import FooterMenu from '@/components/FooterMenu';

const Footer = () => {
  return (
    <footer className='bg-neutral'>
      <div className='container'>
        <FooterMenu />
      </div>
      <div className='bg-slate-900 p-3 text-white text-sm'>
        <div className='container'>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
