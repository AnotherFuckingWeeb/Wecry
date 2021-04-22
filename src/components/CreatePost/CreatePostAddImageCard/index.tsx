import React, { useState } from 'react';
import { CreatePostImageButton } from '../CreatePostImageButton'
import { ICreatePostAddImageProps } from './CreatePostAddImageCardPropsInterface'
import './style.css'

export const CreatePostAddImageCard = (props: ICreatePostAddImageProps) => {
    
    const openImageFolder = () : void => {
        const input = document.getElementById('postImage');

        if (input) input.click();
    } 

    const getImagePreview = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        if (event.target.files !== null) {
            props.onChange(event);
        }
    }

    return (
        <div className='create-post-add-image-card' >
            <input style={{display: 'none'}} onChange={getImagePreview} type="file" name="image" id="postImage"/>
            {
                props.image ? <img onClick={openImageFolder} src={URL.createObjectURL(props.image)} /> : <CreatePostImageButton width='100%' height='100%' paragraph='Add an image' onClick={openImageFolder} />
            }
        </div>
    )
}