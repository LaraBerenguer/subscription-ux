import { Outlet, useLocation } from 'react-router-dom';
import GoBackButton from '../components/Button/GoBackButton';

const Layout = () => {
  const buttonPages: Record<string, 'transparent' | 'rounded'> = {
    '/verify': 'transparent',
    '/plans': 'rounded',
  };

  const location = useLocation();
  const currentlocation = buttonPages[location.pathname];

  return (
    <main>
      {currentlocation &&
                <div className="go-back-button">
                  <GoBackButton variant={currentlocation} /></div>}
      <Outlet />
    </main>
  );
};

export default Layout;
