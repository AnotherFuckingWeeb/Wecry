import React from 'react';
import { ButtonStyleOne } from '../../Buttons/ButtonStyleOne';
import { IGotoLoginProps } from './GotoLoginPropsInterface'
import './style.css'

export const GotoLogin = (props: IGotoLoginProps) : JSX.Element => {
    return (
        <>
            <h1 className='mb'>You are not logged in</h1>
            <ButtonStyleOne title='Log In' onClick={props.goto} />
        </>
    )
}