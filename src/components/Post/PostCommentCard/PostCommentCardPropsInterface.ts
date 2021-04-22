export interface IPostCommentCardProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: () => Promise<void>;
}