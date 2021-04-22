import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { IPostCardProps } from './PostCardPropsInterface'
import { Header } from '../Header'
import { User } from '../../utils/user'
import './style.css'

export const PostCard = (props: IPostCardProps) : JSX.Element => {

    const user = new User();

    const [isFavorite, setIsFavorite] = useState(props.isFavorite);

    const truncate = (text: string, length: number) : string => {
        return (text.length > length) ? text.substr(0, length) + '...' : text
    }

    const addToShoppingCart = async () : Promise<void> => {
        const url = 'http://localhost:4000/shoppingcart/add';
        const request = {
            userId: user.Id,
            postId: props.id
        };

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });
    }  

    const removeShoppingCart = async () : Promise<void> => {
        const url = `http://localhost:4000/shoppingcart/${props.id}/remove`;

        await fetch(url, {
            method: 'DELETE'
        });
    }

    const toggleShoppingCart = async () : Promise<void> => {
        if (isFavorite) {
            await addToShoppingCart();
            setIsFavorite(true);
        }

        else {
            await removeShoppingCart();
            setIsFavorite(false);
        }
    }

    return(
        <div className='post-card' >
            <div className='post-card-image'>
                <img src={`http://localhost:4000/uploads/${props.image}`} alt="" />
            </div>
            <div className='post-card-body' >
                <div>
                    <div className='post-card-title' >
                        <Header title={props.title} fontSize={20} />
                        { user.Id && <FontAwesomeIcon color={isFavorite ? 'red' : 'rgba(0, 0, 0, 0.5)'} icon={faHeart} size='lg' onClick={toggleShoppingCart} /> }
                    </div>
                    <p><b>$ </b>{props.price}</p>
                </div>
                <div className='post-card-description'>
                    <p>{truncate(props.description, 100)}</p>
                </div>
                <div className='post-card-link'>
                    <Link to={`/post/post_id=${props.id}`} >Take a look</Link>
                </div>
            </div>
        </div>
    )
}