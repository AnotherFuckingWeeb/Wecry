import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export const SignInButton = () : JSX.Element => {
    return (
        <Link to='/login' className='sign-in-button' >
            <FontAwesomeIcon style={{ marginRight: 10 }} size='lg' icon={faUserCircle} />
            <p>Sign In</p>
        </Link>
    )
}