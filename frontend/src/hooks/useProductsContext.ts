import { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";


export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within an ProductProvider');
    }
    return context;
};