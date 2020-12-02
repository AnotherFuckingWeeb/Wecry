import { faDivide } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { HomeLink } from '../../HomeLink'
import './style.css'

export const HomeNavbar = () : JSX.Element  => {
    return(
        <header>
            <nav>
                <div className='user-sign-up-navbar' >
                    <HomeLink />
                </div>
            </nav>
        </header>
    )
} 