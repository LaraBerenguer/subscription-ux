import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConnectPage from './pages/ConnectPage';
import VerifyPage from './pages/VerifyPage';
import PlansPage from './pages/PlansPage';
import SuccessPage from './pages/SuccessPage';
//import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ConnectPage />} />
        <Route path='/verify' element={<VerifyPage />} />
        <Route path='/plans' element={<PlansPage />} />
        <Route path='/success' element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
