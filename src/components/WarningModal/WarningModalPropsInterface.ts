import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface IWarningModalProps {
    iconOptions: {
        icon: IconProp,
        color?: string,
        size?: SizeProp
    };
    title: string;
    description: string;
    Close?: () => void;
    Next?: () => void; 
}