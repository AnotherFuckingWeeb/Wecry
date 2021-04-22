import React from 'react';
import { ICategoryStoreProps } from './CategoryStorePropsInterface'
import { LinkButton } from '../Buttons/LinkButton'
import './style.css'

export const CategoryStore = (props: ICategoryStoreProps) : JSX.Element => {
    return (
        <div className='category-store' >
            <img className='category-store-wallpaper' src={`http://localhost:4000/uploads/${props.wallpaper}`} alt=""/>
            <img className='category-store-logo' src={`http://localhost:4000/uploads/${props.logo}`} alt=""/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <LinkButton title='See store' href={props.href} />
        </div>
    )
}