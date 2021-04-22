import { Icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ICreatePostState {
    image: any;
    images: any;
    title: string;
    price: string;
    description: string;
    category: string;
    loading: boolean
    isError: boolean;
    formErrors: {
        title: string;
        price: string;
        category: string;
        description: string;
    },
    message: string
}