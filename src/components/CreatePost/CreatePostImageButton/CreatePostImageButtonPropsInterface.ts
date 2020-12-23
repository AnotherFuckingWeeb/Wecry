import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface ICreatePostImageButtonProps {
    width: number | string;
    height: number | string;
    paragraph?: string;
    iconSize?: SizeProp
    onClick?: () => void;
}