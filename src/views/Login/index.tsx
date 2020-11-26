import React from 'react';
import { Helmet } from 'react-helmet'
import { ILoginProps } from './ILoginPropsInterface'
import { ILoginState } from './IloginStateInterface' 
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { LinkButton } from '../../components/Buttons/LinkButton'
import { InputText } from '../../components/InputText'
import { Header } from '../../components/Header'
import './style.css'

class Login extends React.Component<ILoginProps, ILoginState> {
    
    constructor(props: ILoginProps) {
        super(props)

        this.state = {
            username: '',
            password: '',
            loading: false
        }

    }

    private onStateChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const { name, value } = event.target
    
        this.setState({
            ...this.state,
            [name] : value
        })
    }

    render() : JSX.Element {
        return(
            <main>
                <Helmet>
                    <title>Log In</title>
                    <style>{'body { background: linear-gradient(#ffeb3b 50%, #eceff1 50%); }'}</style>
                </Helmet>
                <div className='login-card-container' >
                    <div className='login-card' >
                        <Header title='Hi! Please enter your username or your email and password' />
                        <InputText placeholder='Email or username' type="text" name="username" value={this.state.username} onChange={this.onStateChange} />
                        <InputText placeholder='password' type="password" name="password" value={this.state.password} onChange={this.onStateChange} />
                        <ButtonStyleOne title='Sign In'/>
                        <LinkButton title='Create Account' link='#'/>
                    </div>
                </div>
            </main>
        )
    }
}

export default Login;