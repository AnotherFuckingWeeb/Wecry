import React, { useState } from 'react';
import { ILoginFormProps } from './LoginFormPropsInterface'
import { ButtonStyleOne } from '../../Buttons/ButtonStyleOne';
import { InputText } from '../../InputText';
import { Loading } from '../../Loading';
import { User } from '../../../utils/user'
import './style.css'

export const LoginForm = (props: ILoginFormProps) : JSX.Element => {
    
    const user = new User();

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    
    const Login = async () : Promise<void> => {
        try {
            const url = 'http://localhost:4000/login';
            const request = {
                email: formState.email,
                password: formState.password
            }
    
            setIsLoading(true);
    
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });
    
            const data = await response.json();
    
            if (data[0][0].is_company) {
                const { id, wallpaper, profile_image, firstname, description, phonenumber, email, is_company } = data[0][0];
                user.LoginCompany(id, wallpaper, profile_image, firstname, description, email, phonenumber, is_company);
            }
    
            else {
                const { id, profile_image, firstname, lastname, country, email, is_company } = data[0][0];
                user.LoginUser(id, profile_image, firstname, lastname, email, country, is_company);
            }
    
            setIsLoading(false);
            props.hide();    
        } 
        
        catch (error) {
            console.log(error);
        }
    }


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const { name, value } = event.target
    
        setFormState({
            ...formState,
            [name] : value
        });
    }

    return (
        <>
            <Loading isLoading={isLoading} />
            <h1 className='mb-twenty' >You must be logged to continue</h1>
            <div className='login-form-input' >
                <InputText placeholder='email' name='email' value={formState.email} type='email' onChange={onChange} />
            </div>
            <div className='login-form-input' >
                <InputText placeholder='password' name='password' value={formState.password} type='password' onChange={onChange} />
            </div>
            <ButtonStyleOne title='Log In' onClick={Login} />
        </>
    )
}