import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IPanelMenuLinkPropsInterface {
    icon: IconDefinition;
    title: string;
    href?: string;
    isRed?: boolean;
    onClick?: () => void;
}