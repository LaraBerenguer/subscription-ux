import { useEffect, useMemo, useState } from 'react';
import type { ProductList } from '../../types/types';
import { ProductContext } from './ProductsContext';
import { useProductsActions } from '../../hooks/useProductsActions';

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');
  const [products, setProducts] = useState<ProductList | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const {getProducts} = useProductsActions({setError, setLoading, setProducts});

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);  

  const value = useMemo(() => ({
    getProducts,
    loading,
    setLoading,
    error,
    setError,
    products,
    selectedPrice,
    setSelectedPrice,
  }), [loading, error, selectedPrice, products]);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
