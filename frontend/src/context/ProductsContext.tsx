import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ProductList } from "../types/types";
import { getProductsList } from "../services/product-api";

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

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>("");
    const [products, setProducts] = useState<ProductList | null>(null);
    const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        setLoading(true);
        setError(null);

        try {
            const productsList: ProductList = await getProductsList();
            setProducts(productsList);
            setLoading(false);
            return productsList;
        } catch (error) {
            const errorMessage = error instanceof Error ? error : new Error("Failed to fetch products");
            setError(errorMessage.message);
            setProducts(null)
            setLoading(false);
            return null;
        }
    };

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

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within an ProductProvider');
    }
    return context;
};