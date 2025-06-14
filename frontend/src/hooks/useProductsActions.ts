import { getProductsList } from '../services/product-api';
import type { ProductList } from '../types/types';

interface UseProductsActions {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    setProducts: React.Dispatch<React.SetStateAction<ProductList | null>>;
};

export const useProductsActions = ({ setLoading, setError, setProducts }: UseProductsActions) => {

    const getProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const productsList: ProductList = await getProductsList();
            setProducts(productsList);
            setLoading(false);
            return productsList;
        } catch (error) {
            const errorMessage = error instanceof Error ? error : new Error('Failed to fetch products');
            setError(errorMessage.message);
            setProducts(null);
            setLoading(false);
            return null;
        }
    };
    return {
        getProducts
    }
};