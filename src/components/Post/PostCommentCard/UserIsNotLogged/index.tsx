import React from 'react';
import { LinkButton } from '../../../Buttons/LinkButton';
import { Header } from '../../../Header';
import './style.css'

export const UserIsNotLogged = () : JSX.Element => {
    return (
        <div className='user-is-not-logged' >
            <Header title='You need to be logged to comment' />
            <LinkButton title='Sign In' href='/login' />
        </div>
    )
}