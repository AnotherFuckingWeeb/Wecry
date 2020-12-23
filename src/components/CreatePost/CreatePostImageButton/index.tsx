import React from 'react';
import { ICreatePostImageButtonProps } from './CreatePostImageButtonPropsInterface'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'

export const CreatePostImageButton = (props: ICreatePostImageButtonProps) : JSX.Element => {
    return (
        <div className='post-image-button' style={{width: props.width, height: props.height}} onClick={props.onClick} >
            <FontAwesomeIcon icon={faPlus} size={props.iconSize || '4x'} />
            {
                props.paragraph ? <p>{props.paragraph}</p> : null
            }
        </div>
    )
}