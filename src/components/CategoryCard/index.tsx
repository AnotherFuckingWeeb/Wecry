import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ICatergoryCardProps } from './CategoryCardPropsInterface'
import './style.css'

export const CategoryCard = (props: ICatergoryCardProps) : JSX.Element => {
    return(
        <div className='category-card' >
            <FontAwesomeIcon icon={props.icon} size='5x' />
            <h2>{props.title}</h2>
        </div>
    )
} 