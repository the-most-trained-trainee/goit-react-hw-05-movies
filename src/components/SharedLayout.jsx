import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <span> </span>
        <NavLink to="/movies">Movies</NavLink>
        <hr />
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
