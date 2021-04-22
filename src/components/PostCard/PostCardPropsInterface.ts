export interface IPostCardProps {
    id: string | number;
    image: string;
    title: string;
    price: string;
    description: string;
    isFavorite?: boolean;
}