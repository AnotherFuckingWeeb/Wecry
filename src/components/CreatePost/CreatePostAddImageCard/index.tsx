import React, { useState } from 'react';
import { CreatePostImageButton } from '../CreatePostImageButton'
import './style.css'

export const CreatePostAddImageCard = () => {
    
    const [image, setImage] = useState('');

    const openImageFolder = () : void => {
        const input = document.getElementById('postImage');

        if (input) input.click();
    } 

    const getImagePreview = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        if (event.target.files !== null) {
            setImage(URL.createObjectURL(event.target.files[0]))
        }
    }

    return (
        <div className='create-post-add-image-card' >
            <input style={{display: 'none'}} onChange={getImagePreview} type="file" name="" id="postImage"/>
            {
                image ? <img onClick={openImageFolder} src={image} /> : <CreatePostImageButton width='100%' height='100%' paragraph='Add an image' onClick={openImageFolder} />
            }
        </div>
    )
}