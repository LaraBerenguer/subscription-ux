export interface UserInfo {
    email: string | undefined;
    code: string;
};

export interface UserId {
    user_id: number;
}

type Product = {
    price: string;
    currency: string;
    trial_days: number;
};

export type ProductList = {
    monthly: Product;
    yearly: Product
};