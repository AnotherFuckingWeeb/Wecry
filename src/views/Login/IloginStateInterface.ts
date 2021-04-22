export interface ILoginState {
    email: string;
    password: string;
    message: string,
    loading: boolean;
    isError: boolean;
    formErrors: {
        email: string;
        password: string;
    }
}