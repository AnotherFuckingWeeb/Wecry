export interface IPostState {
    comment: string;

    post: {
        id: number,
        image: string,
        title: string,
        price: string,
        description: string,
        isFavorite: boolean
    };

    user: {
        id: number,
        profileImage: string,
        firstname: string,
        lastname: string,
        country: string,
        description: string,
        isCompany: boolean,
    };

    postImages: string[];
    comments: [];

}