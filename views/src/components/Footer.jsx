import Copyright from '@/components/Copyright';
import FooterMenu from '@/components/FooterMenu';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='flex flex-col'>
          <FooterMenu />
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
