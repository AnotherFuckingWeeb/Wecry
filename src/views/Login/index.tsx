import React from 'react';
import { Helmet } from 'react-helmet'
import { User } from '../../utils/user'
import { ILoginProps } from './ILoginPropsInterface'
import { ILoginState } from './IloginStateInterface' 
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { LinkButton } from '../../components/Buttons/LinkButton'
import { InputText } from '../../components/InputText'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { NotificationPopUp } from '../../components/NotificationPopUp'
import './style.css'

const InitialState = {
    email: '',
    password: '',
    message: '',
    loading: false,
    isError: false,
    formErrors: {
        email: '',
        password: ''
    }
}

class Login extends React.Component<ILoginProps, ILoginState> {

    private user: User = new User();
    
    constructor(props: ILoginProps) {
        super(props)

        this.state = InitialState
    }

    private onStateChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const { name, value } = event.target
    
        this.setState({
            ...this.state,
            [name] : value
        })
    }
    
    private validateEmail = () : boolean => {
        
        let validEmail = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        if (this.state.email === '') {
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    email: 'Email field cannot be empty'
                }
            });

            return false;
        }

        if (!validEmail) {
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    email: 'Please enter a valid email adress'
                }
            });

            return false;
        }

        else return true;
    }

    private validatePassword = () : boolean => {
        if (this.state.password === '') {
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    password: 'Password field cannot be empty'
                }
            });

            return false;
        }

        else return true;
    }


    private cleanFormEmailError = () : void => {
        this.setState({
            ...this.state,
            formErrors: {
                ...this.state.formErrors,
                email: ''
            }
        });
    }

    private cleanFormPasswordError = () : void => {
        this.setState({
            ...this.state,
            formErrors: {
                ...this.state.formErrors,
                password: ''
            }
        });
    }

    private isValid = () : boolean => {
        return (this.validateEmail() && this.validatePassword());
    }

    private Login = async () : Promise<void> => {
        try {
            let url = 'http://localhost:4000/login';
            
            let request = {
                email: this.state.email,
                password: this.state.password
            }

            this.setState({
                loading: true
            });

            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            })

            let data = await response.json();
           
            if (data.msg) {
                this.setState({
                    message: data.msg,
                    isError: true,
                    loading: false
                });
            }

            else {
                
                if (data.account.is_company) {
                    let { id, wallpaper, profile_image, firstname, description, phonenumber, email, is_company } = data.account;
                    this.user.LoginCompany(id, wallpaper, profile_image, firstname, description, phonenumber, email, is_company);
                }

                else {
                    let { id, profile_image, firstname, lastname, country, email, is_company } = data.account;
                    this.user.LoginUser(id, profile_image, firstname, lastname, country, email, is_company);
                }

                this.setState({
                    loading: false
                });

                window.location.href = '/posts';
            }

        } 
        
        catch (error) {
            this.setState({
                loading: false,
                isError: true,
                message: 'Something Went Wrong'
            })
        }
    }

    private onSubmit = async () : Promise<void> => {

        if (this.isValid()) {
            await this.Login();
        }
    }   

    render() : JSX.Element {
        return(
            <main>
                <Helmet>
                    <title>Log In</title>
                    <style>{'body { background: linear-gradient(#ffeb3b 50%, #eceff1 50%); }'}</style>
                </Helmet>
                <div className='login-card-container' >
                    <div className='login-card'>
                        <Loading isLoading={this.state.loading} />
                        <Header title='Hi! Please enter your email account and password' />
                        <InputText placeholder='Email' type="text" name="email" value={this.state.email} validate={this.state.formErrors.email} onChange={this.onStateChange} onFocus={this.cleanFormEmailError} />
                        <InputText placeholder='password' type="password" name="password" value={this.state.password} validate={this.state.formErrors.password} onChange={this.onStateChange} onFocus={this.cleanFormPasswordError}  />
                        <ButtonStyleOne onClick={this.onSubmit} title='Sign In'/>
                        <LinkButton href='/signup' title='Create Account'/>
                    </div>
                </div>
                { this.state.message && <NotificationPopUp msg={this.state.message} isError={this.state.isError} close={() => this.setState({ message: '' })} /> }
            </main>
        )
    }
}

export default Login;