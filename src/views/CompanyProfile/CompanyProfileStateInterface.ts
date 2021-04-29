export interface ICompanyProfileState {
    company: {
        id: number,
        wallpaper: string,
        logo: string,
        name: string,
        description: string
    },

    posts: [];
    loading: boolean;
    isError: boolean;
    message: string;
}