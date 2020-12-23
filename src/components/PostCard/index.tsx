import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export const PostCard = () : JSX.Element => {
    return(
        <div className='post-card' >
            <div className='post-card-image'>
                <img src='https://http2.mlstatic.com/televisor-panasonic-32-pulgadas-lcd-hd-como-nuevo-D_NQ_NP_809912-MLV42955335671_072020-O.webp' alt="" />
            </div>
            <div className='post-card-body' >
                <div className='post-card-title' >
                    <p>LG TV LED DPI 1600MS 200 inches</p>
                    <FontAwesomeIcon className='heart-icon' icon={faHeart} size='lg' />
                </div>
                <div className='post-card-currency' >
                    <p><b>$</b> 30.000</p>
                </div>
                <div className='post-card-description'>
                    <p>Vendo televisor poco uso, todo funcional con 10 puertos para DVD y Bluray con control incluído y se puede colocar en la pared o en la mesa. Está llevando polvo asi que prefiere que alguien le de un buen uso además de que ya no lo necesito porque no miro televisión</p>
                </div>
                <div className='post-card-link'>
                    <Link to='/post' >Take a look</Link>
                </div>
            </div>
        </div>
    )
}