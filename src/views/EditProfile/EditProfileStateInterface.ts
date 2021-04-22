export interface IEditProfileState {
    profileImage: any;
    firstname: string;
    lastname: string;
    email: string;
    currentPassword: string;
    newPassword: string;
    message: string;
    loading: boolean;
    isError: boolean;
}