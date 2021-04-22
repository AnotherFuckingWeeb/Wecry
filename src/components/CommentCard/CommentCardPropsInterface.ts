export interface ICommentCardProps {
    id: number;
    user_id: number;
    image: string;
    username: string;
    comment: string;
    date: string;
    edit: (id: number, content: string) => Promise<void>;
    delete: (id: number) => Promise<void>
}