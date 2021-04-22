export interface ICommentCardPanelMenuProps {
    showEditPanel: () => void;
    deleteComment: () => Promise<void>;
}