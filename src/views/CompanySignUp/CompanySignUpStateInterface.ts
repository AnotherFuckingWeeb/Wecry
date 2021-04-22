export interface ICompanySignUpState {
    wallpaper: any;
    logo: any;
    name: string;
    email: string;
    password: string;
    phonenumber: string;
    description: string;
    category: string;
    message: string;
    loading: boolean;
    isError: boolean;
    formErrors: {
        name: string;
        email: string;
        password: string;
        phonenumber: string,
        category: string;
        description: string;
    }

}