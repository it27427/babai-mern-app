import notfound from '@/assets/images/notfound/not-found.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <figure className='flex items-center justify-center w-80 h-80'>
        <img src={notfound} alt='NOT-FOUND-THUMB' />
      </figure>
      <Link to='/' className='btn btn-primary'>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
