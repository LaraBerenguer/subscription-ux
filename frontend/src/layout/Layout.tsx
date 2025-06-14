import { Outlet, useLocation } from 'react-router-dom';
import GoBackButton from '../components/Button/GoBackButton';
import { useEffect } from 'react';
import { useEmailContext } from '../hooks/useEmailContext';
import { useProductContext } from '../hooks/useProductsContext';

const Layout = () => {
  const buttonPages: Record<string, 'transparent' | 'rounded'> = {
    '/verify': 'transparent',
    '/plans': 'rounded',
  };

  const location = useLocation();
  const currentlocation = buttonPages[location.pathname];

  const { clearError: clearEmailError } = useEmailContext();
  const { clearError: clearProductError } = useProductContext();

  useEffect(() => {
    clearEmailError();
    clearProductError();
  }, [location.pathname, clearEmailError, clearProductError]);

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
