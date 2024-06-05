import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import notfound from '@/assets/images/notfound/not-found.svg';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <figure className='flex items-center justify-center w-72 h-72 md:w-80 md:h-80'>
        <img
          src={notfound}
          alt='NOT-FOUND-THUMB'
          className='w-full h-full object-cover'
        />
      </figure>

      <Link
        to='/'
        className='btn btn-outline btn-neutral btn-wide text-xs uppercase'
      >
        <BsArrowLeft className='mt-0.5' />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
