export interface IButtonStyleOneProps {
    title: string;
    isRed? :boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}