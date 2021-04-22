export interface IEditProfileInfoProps {
    image: any;
    name: string;
    email: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}