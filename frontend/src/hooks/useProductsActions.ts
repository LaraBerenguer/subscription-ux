import { getProductsList } from '../services/product-api';
import type { ProductList } from '../types/types';
import { useError } from './useError';

interface UseProductsActions {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;   
    setProducts: React.Dispatch<React.SetStateAction<ProductList | null>>;
};

export const useProductsActions = ({ setLoading, setProducts }: UseProductsActions) => {
    const { showError, clearError } = useError();

    const getProducts = async () => {
        setLoading(true);
        clearError();
        try {
            const productsList: ProductList = await getProductsList();
            setProducts(productsList);
            setLoading(false);
            return productsList;
        } catch (error) {
            const errorMessage = error instanceof Error ? error : new Error('Failed to fetch products');
            showError(errorMessage.message);
            setProducts(null);
            setLoading(false);
            return null;
        }
    };
    return {
        getProducts
    }
};