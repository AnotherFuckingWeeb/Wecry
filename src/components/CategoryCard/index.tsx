import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ICatergoryCardProps } from './CategoryCardPropsInterface'
import './style.css'

export const CategoryCard = (props: ICatergoryCardProps) : JSX.Element => {
    return(
        <Link to={`/posts/category=${props.title}`} className='category-card' >
            <FontAwesomeIcon icon={props.icon} size='5x' />
            <h2>{props.title}</h2>
        </Link>
    )
} 