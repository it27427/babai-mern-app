import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? 'text-indigo-200 uppercase text-xs font-medium'
      : 'text-slate-100 uppercase text-xs font-medium transition hover:text-indigo-200';

  return (
    <ul className='flex items-center gap-6'>
      <li>
        <NavLink to='/' className={linkClasses}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' className={linkClasses}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to='/contact' className={linkClasses}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
