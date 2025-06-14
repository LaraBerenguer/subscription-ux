import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConnectPage from '../pages/ConnectPage';
import VerifyPage from '../pages/VerifyPage';
import PlansPage from '../pages/PlansPage';
import SuccessPage from '../pages/SuccessPage';
import Layout from '../layout/Layout';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<ConnectPage />} />
          <Route path='/verify' element={<VerifyPage />} />
          <Route path='/plans' element={<PlansPage />} />
          <Route path='/success' element={<SuccessPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
