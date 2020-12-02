export interface IInputTextProps {
    placeholder?: string;
    name: string;
    value: string;
    type: 'text' | 'password' | 'email';
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}