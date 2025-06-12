export interface UserInfo {
    email: string | undefined;
    code: string;
};

type Product = {
    price: string;
    currency: string;
    trial_days: number;
};

export type ProductList = {
    monthly: Product;
    yearly: Product
};