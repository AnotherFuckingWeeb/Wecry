export interface ICategorySelectProps {
    validate?: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onFocus?: () => void;
}