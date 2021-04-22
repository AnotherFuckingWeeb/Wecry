export interface IDescriptionInputProps {
    placeholder?: string;
    name: string;
    value: string;
    validate?: string;
    width?: number | string;
    onChange?: (event: any) => void;
    onFocus?: () => void;
}