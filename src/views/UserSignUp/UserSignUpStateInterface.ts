export interface IUserSignUpState {
    image: any;
    firstname: string;
    lastname: string;
    country: string;
    email: string;
    password: string;
    message: string;
    loading: boolean;
    isError: boolean;
    formErrors: {
        firstname: string,
        lastname: string,
        email: string,
        password: string
    }
}