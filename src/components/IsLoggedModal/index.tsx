import React, { useState } from 'react';
import { GotoLogin } from './GotoLogin'
import { LoginForm } from './LoginForm'
import { IIsLoggedModalProps } from './IsLoggedModalPropsInterface'
import './style.css'

export const IsLoggedModal = (props: IIsLoggedModalProps) : JSX.Element => {

    const [gotoLogin, setGotoLogin] = useState(false)

    const gotoLoginForm = () : void => {
        setGotoLogin(true);
    } 

    return (
        <div className='is-logged-modal'>
            { gotoLogin ? <LoginForm hide={props.hide} /> : <GotoLogin goto={gotoLoginForm} /> }
        </div>
    )
}