import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/movies">Movies</Link>
        <hr />
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
