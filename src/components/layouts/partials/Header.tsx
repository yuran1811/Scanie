import { publicRoutes } from '@/routes';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => (
  <header className="z-[100] sticky top-0 left-0 w-full bg-ct-bg-800 border-b-[2px] border-ct-color p-4 flex flex-wrap items-center justify-start">
    {publicRoutes.map(({ path: { index } }) => (
      <NavLink
        key={index}
        to={`/${index}`}
        className={({ isActive }) =>
          `w-full sm:w-auto font-semibold text-center capitalize p-4 mx-4 text-ct-color ${
            isActive ? 'underline underline-offset-8' : ''
          }`
        }
      >
        {index}
      </NavLink>
    ))}
  </header>
);
