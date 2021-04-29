export interface IProductCardDescriptionProps {
    id: number;
    userId: number;
    productImage: string;
    title: string;
    amount: string;
    description: string;
    isFavorite: boolean;
    Delete: (id: number) => void;
}