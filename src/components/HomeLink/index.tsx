import React from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../assets/images'
import './style.css'

export const HomeLink = () : JSX.Element => {
    return(
        <Link className='home-logo' to='/' >
            <img src={Images.Logo} />
            <h3>Wecry</h3>
        </Link>
    )
}