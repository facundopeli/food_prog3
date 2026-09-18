export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

export interface ICartItem {
    product: IProduct;
    amount: number;
}