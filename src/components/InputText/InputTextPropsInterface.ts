export interface IInputTextProps {
    placeholder?: string;
    name: string;
    value: string;
    type: 'text' | 'password' | 'email' | 'number';
    validate?: string;
    maxLength?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: () => void;
}