import { API_URL, END_POINTS } from "../config";
import type { ProductList } from "../types/types";

//get products
export const getProductsList = async (): Promise<ProductList> => {
    try {
        const response = await fetch(`${API_URL}/${END_POINTS.products.get}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = response.json();

        return data;

    } catch (error) {
        console.error('Error fetching products', error);
        throw error;
    };
};