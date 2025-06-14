import { createContext } from 'react';
import type { ProductList } from '../../types/types';

interface ProductContextProps {
    getProducts: () => Promise<ProductList | null>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    products: ProductList | null;
    selectedPrice: string | null;
    setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>
};

export const ProductContext = createContext<ProductContextProps | undefined>(undefined);
