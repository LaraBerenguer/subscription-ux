import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import AppRoutes from './routes/AppRoutes.tsx';
import { EmailProvider } from './context/email/EmailProvider.tsx';
import { ProductProvider } from './context/products/ProductsProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>
      <EmailProvider>
        <AppRoutes />
      </EmailProvider>
    </ProductProvider>
  </StrictMode>,
);
