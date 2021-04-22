import React from 'react'
import { Helmet } from 'react-helmet'
import { IUserSignUpProps } from './UserSignUpPropsInterface'
import { IUserSignUpState } from './UserSignUpStateInterface'
import { HomeNavbar } from '../../components/Navbars/HomeNavbar'
import { InputText } from '../../components/InputText'
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { FlagIcon } from '../../components/Flag/flag'
import { Loading } from '../../components/Loading'
import { NotificationPopUp } from '../../components/NotificationPopUp'
import { countries } from '../../utils/countries'
import { Images } from '../../assets/images'
import './style.css'

const InitialState = {
    image: undefined,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    message: '',
    country: 'af',
    loading: false,
    isError: false,
    formErrors : {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }
}

class UserSignUp extends React.Component<IUserSignUpProps, IUserSignUpState> {

    constructor(props: IUserSignUpProps) {
        super(props)

        this.state = InitialState;
    }

    private onChangeState = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        
        const { name, value } = event.target

        this.setState({
            ...this.state,
            [name] : value
        })
    }

    private onChangeCountryFlag = (event: React.ChangeEvent<HTMLSelectElement>) : void => {
        
        const { value } = event.target    
    
        this.setState({
            ...this.state,
            country: value
        })

        console.log(this.state.country)
    }


    private getImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        if (event.target.files !== null) {
            this.setState({
                ...this.state,
                image: event.target.files[0] === undefined ? undefined : event.target.files[0]
            })
        }
    }

    private openImageFolder = () : void => {
        const input = document.getElementById('profile-image')
        
        if (input) input.click();
    }

    private isValidEmail = () : boolean => {
        
        let validEmail = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        
        if (this.state.email === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    email: 'Email field cannot be empty'
                }
            })

            return false;
        }

        if (!validEmail) {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    email: 'Please enter a valid email adress'
                }
            })

            return false;
        }

        else return true;
    }


    private isValidPassword = () : boolean => {
        if (this.state.password.length < 8) {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    password: 'Password should be at least 8 characters'
                }
            })

            return false;
        }

        if (this.state.password.length > 15) {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    password: 'Password must not exceed 15 characters'
                }
            })

            return false;
        }

        else return true;
    }

    private isValidNameInput = () : boolean => {
        const { firstname, lastname } = this.state
        
        if (firstname === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    firstname: 'Firstname field cannot be empty'
                }
            })

            return false;
        }
        
        else if (lastname === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    lastname: 'Lastname field cannot be empty'
                }
            })

            return false;
        }

        else return true;
    }


    private isValidProfilePicture = () : boolean => {
        if (!this.state.image) {
            this.setState({
                message: 'Profile picture cannot be empty',
                isError: true
            });

            return false;
        }

        else return true;
    }

    private isValid = () : boolean => {
        
        const { isValidNameInput, isValidEmail, isValidPassword, isValidProfilePicture } = this

        return (isValidNameInput() && isValidEmail() && isValidPassword() && isValidProfilePicture());
    }

    
    private signUp = async () : Promise<any> => {
        const url = 'http://localhost:4000/usersignup';
        const formData = new FormData();

        formData.append("email", this.state.email);
        formData.append("file", this.state.image);
        formData.append("firstname", this.state.firstname);
        formData.append("lastname", this.state.lastname);
        formData.append("country", this.state.country);
        formData.append("password", this.state.password);

        const request = await fetch(url, {
            method: 'POST',
            body: formData
        });

        return request.json();
    } 

    private clearError = (field: string) : void => {
        this.setState({
            ...this.state,
            formErrors: {
                ...this.state.formErrors,
                [field] : ''
            }
        })
    }

    private onSubmit = async (event: React.FormEvent<HTMLFormElement>) : Promise<void> => {        
        try {
            event.preventDefault();
            
            if (this.isValid()) {
                this.setState({ loading: true });

                const response = await this.signUp();

                this.setState({
                    loading: false,
                    message: response.msg,
                    isError: response.error
                });
            }
        } 
        
        catch (error) {
            this.setState({
                loading: false,
                isError: true,
                message: 'Something went wrong'
            });
        }        
    }

    render() : JSX.Element {
        return (
            <main>
                <Helmet>
                    <title>User Register</title>
                    <style>{'body { background-color: #eceff1; }'}</style>
                </Helmet>
                <HomeNavbar/>
                <section className='user-sign-up-container-section' >
                    <div className='user-sign-up-card' >
                        <div className='user-sign-up-card-yellow-section' >
                            <div className='user-sign-up-card-yellow-section-title' >
                                <h1>Register User Account</h1>
                            </div>
                            <p>Join Us And Discover what wecry brings to you</p>
                            <img src={Images.userAccount} alt="" />
                        </div>
                        <section className='user-sign-up-card-form-section'>
                            <form onSubmit={this.onSubmit} encType='multipart/form-data'>
                                <Loading isLoading={this.state.loading} />
                                <input onChange={this.getImagePreview} style={{display: 'none'}} type="file" name="profile-image" id="profile-image"/>
                                <div onClick={this.openImageFolder} className='user-sign-up-card-user-image'>
                                    <img src={this.state.image === undefined ? Images.companyPicPlaceholder : URL.createObjectURL(this.state.image)} alt="" />
                                    <div className='user-sign-up-card-user-image-hover-container'>
                                        <h1>Select Image</h1>
                                    </div>
                                </div>
                                <div className='user-sign-up-card-form-input-container' >
                                    <div className='user-sign-up-card-form-input-container-input-width' >
                                        <InputText placeholder='First Name' name='firstname' value={this.state.firstname} type='text' onChange={this.onChangeState} validate={this.state.formErrors.firstname} onFocus={() => this.clearError('firstname')} />
                                    </div>
                                    <div className='user-sign-up-card-form-input-container-input-width'>
                                        <InputText placeholder='Lastname' name='lastname' value={this.state.lastname} type='text' onChange={this.onChangeState} validate={this.state.formErrors.lastname} onFocus={() => this.clearError('lastname')} />
                                    </div>
                                </div>
                                <div className='user-sign-up-card-form-select-container' >
                                    <div className='user-sign-up-card-form-select' >
                                        <select name="country" id="country" onChange={this.onChangeCountryFlag} >
                                            {countries.map((country) : JSX.Element => {
                                                return(
                                                    <option value={country.code}>{country.name}</option>
                                                )
                                            })}
                                        </select>
                                        <FlagIcon code={this.state.country} size='2x' />
                                    </div>
                                </div>
                                <div className='user-sign-up-card-form-input-container'>
                                    <div className='user-sign-up-card-form-input-container-input-width'>
                                        <InputText placeholder='Email' name='email' value={this.state.email} type='text' onChange={this.onChangeState} validate={this.state.formErrors.email} onFocus={() => this.clearError('email')} />
                                    </div>
                                    <div className='user-sign-up-card-form-input-container-input-width'>
                                        <InputText placeholder='Password' name='password' value={this.state.password} type='password' onChange={this.onChangeState} validate={this.state.formErrors.password} onFocus={() => this.clearError('password')} />
                                    </div>
                                </div>
                                <ButtonStyleOne title='Create Account'/>
                            </form>
                        </section>
                    </div>
                </section>
                { this.state.message && <NotificationPopUp msg={this.state.message} isError={this.state.isError} close={() => this.setState({ message: '' })} /> }
            </main>
        );
    }
}

export default UserSignUp