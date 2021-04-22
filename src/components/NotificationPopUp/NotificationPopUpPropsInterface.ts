export interface INotificationPopUpProps {
    msg: string;
    isError: boolean;
    close: () => void;
}