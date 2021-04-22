export interface IEditCommentsProps {
    comment: string;
    edit: (content: string) => Promise<void>;
    close: () => void;
} 