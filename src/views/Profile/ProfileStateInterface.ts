export interface IProfileState {
    user: {
        id: number,
        profileImage: string,
        name: string,
        lastname: string,
        fullname: string,
        email: string,
        country: string
    },

    posts: [];
    favorites: [];
}