import { useEffect, useMemo, useState } from 'react';
import type { ProductList } from '../../types/types';
import { ProductContext } from './ProductsContext';
import { useProductsActions } from '../../hooks/useProductsActions';
import { useError } from '../../hooks/useError';

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductList | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const { getProducts } = useProductsActions({ setLoading, setProducts });
  const { error, showError, clearError } = useError();

  useEffect(() => {
    getProducts();
  }, []);

  const value = useMemo(() => ({
    getProducts,
    loading,
    setLoading,
    error,
    showError,
    clearError,
    products,
    selectedPrice,
    setSelectedPrice,
  }), [loading, error, selectedPrice, products, clearError, getProducts, showError]);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
