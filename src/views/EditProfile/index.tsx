import React from 'react'
import { Helmet } from 'react-helmet'
import { User } from '../../utils/user'
import { IEditProfileProps } from './EditProfilePropsInterface'
import { IEditProfileState } from './EditProfileStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { InputText } from '../../components/InputText'
import { Header } from '../../components/Header'
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { EditProfileInfoCard } from '../../components/EditProfileInfoCard'
import { InputSection } from '../../components/InputSection'
import { YellowForm } from '../../components/YellowForm'
import { Loading } from '../../components/Loading'
import { NotificationPopUp } from '../../components/NotificationPopUp'
import './style.css'

class EditProfile extends React.Component<IEditProfileProps, IEditProfileState> {
    
    private user : User = new User();

    constructor(props: IEditProfileProps) {
        super(props)

        this.state = {
            profileImage: undefined,
            firstname: this.user.Firstname,
            lastname: this.user.Lastname,
            email: this.user.Email,
            currentPassword: '',
            newPassword: '',
            message: '',
            loading: false,
            isError: false
        }
    }

    private onChangeState = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const { name, value } = event.target
    
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    
    private getImagePreview = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        if (event.target.files !== null) {
            this.setState({
                profileImage: event.target.files[0] === undefined ? undefined : event.target.files[0]
            })
        }
    }

    private isValidName = () : boolean => {
        if (this.state.firstname === '') {
            this.setState({
                message: 'Firstname field cannot be empty',
                isError: true
            })

            return false;
        }

        if (this.state.lastname === '') {
            this.setState({
                message: 'Lastname field cannot be empty',
                isError: true
            })

            return false;
        }

        else return true;
    }

    private isValidEmail = () : boolean => {
        let validEmail = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        
        if (this.state.email === '') {
            this.setState({
                message: 'Email field cannot be empty',
                isError: true
            })

            return false;
        }

        if (!validEmail) {
            this.setState({
                message: 'Please enter a valid email adress',
                isError: true
            })

            return false;
        }

        else return true;
    }

    private isValidPassword = () : boolean => {
        if (this.state.newPassword === '') {
            this.setState({
                message: 'Password field cannot be empty',
                isError: true
            });

            return false;
        }

        if (this.state.newPassword.length < 8) {
            this.setState({
                message: 'Password must be 8 characters length',
                isError: true
            });

            return false;
        }

        if (this.state.newPassword.length > 15) {
            this.setState({
                message: 'Password must not exceed 15 characters length',
                isError: true
            })

            return false;
        }

        else return true;
    }


    private isValid = () : boolean => {
        const { isValidName, isValidEmail, isValidPassword } = this;

        return (isValidName() && isValidEmail() && isValidPassword());
    }

    private updateUser = async () : Promise<any> => {

        const url = `http://localhost:4000/edituser/${this.user.Id}`;    
        const formData = new FormData();
    

        if (this.state.profileImage !== undefined) {
            formData.append('edit-profile', this.state.profileImage);
        }

        else {
            formData.append('profileImage', this.user.ProfileImage);
        }

        formData.append('firstname', this.state.firstname);
        formData.append('lastname', this.state.lastname);
        formData.append('email', this.state.email);
        formData.append('password', this.state.newPassword);

        const request = await fetch(url, {
            method: 'PUT',
            body: formData
        });

        return request.json();
    }

    private onSubmit = async (event: React.FormEvent<HTMLFormElement>) : Promise<void> => {
        try {
            event.preventDefault();

            if (this.isValid()) {
                this.setState({
                    loading: true
                })
                
                const response = await this.updateUser();
    
                this.setState({
                    loading: false,
                    isError: false,
                    message: response.json()
                })
            }

        } 
        
        catch (error) {
            this.setState({
                loading: false,
                isError: true,
                message: 'Something went wrong'
            })
        }
    }

    render() :  JSX.Element {
        return (
            <main>
                <Helmet>
                    <title>Edit Profile</title>
                    <style>{'body { background-color: #ebebeb; }'}</style>
                </Helmet>
                <SearchBar/>
                <section className='edit-profile-main-container'>
                    <Loading isLoading={this.state.loading} />
                    <YellowForm onSubmit={this.onSubmit}>
                        <div style={{marginBottom: 20}} >
                            <Header title='Edit Profile' fontSize={30} />
                        </div>
                        <EditProfileInfoCard image={this.state.profileImage} name={this.user.Fullname} email={this.state.email} onChange={this.getImagePreview} />
                        
                        <InputSection width='80%' height={150} flexDirection='column' justifyContent='space-between' >
                            <InputText placeholder='Firstname' name='firstname' value={this.state.firstname} type='text' onChange={this.onChangeState} />
                            <InputText placeholder='Lastname' name='lastname' value={this.state.lastname} type='text' onChange={this.onChangeState} />
                        </InputSection>
                        
                        <InputSection width='80%' height={100} alignItems='center' justifyContent='center' >
                            <InputText placeholder='Email' name='email' value={this.state.email} type='email' onChange={this.onChangeState} />
                        </InputSection>

                        <InputSection width='80%' height={150} flexDirection='column' justifyContent='space-between' >
                            <InputText placeholder='Current Password' name='currentPassword' value={this.state.currentPassword} type='text' onChange={this.onChangeState} />
                            <InputText placeholder='New Password' name='newPassword' value={this.state.newPassword} type='text' onChange={this.onChangeState} />
                        </InputSection>
                        
                        <InputSection width='80%' height={100} alignItems='center' justifyContent='center' >
                            <ButtonStyleOne title='Save Changes' />
                        </InputSection>
                    </YellowForm>
                </section>
                { this.state.message && <NotificationPopUp isError={this.state.isError} msg={this.state.message} close={() => this.setState({ message: '' })} /> }
            </main>
        )
    }
}

export default EditProfile;