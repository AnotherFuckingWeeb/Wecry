export interface ICommentFormProps {
    isLoading: boolean;
    value: string;
    commentError: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus: () => void;
    onSubmit: () => void;
}