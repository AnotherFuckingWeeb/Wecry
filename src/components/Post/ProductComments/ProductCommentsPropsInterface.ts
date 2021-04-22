export interface IProductCommentsProps {
    edit: (id: number, content: string) => Promise<void>;
    delete: (id: number) => Promise<void>;
    comments: [];
}