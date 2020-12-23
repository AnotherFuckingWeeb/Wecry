import React, { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CreatePostImageButton } from '../CreatePostImageButton'
import './style.css'

export const CreatePostImageCarrouselCard = () => {

    const [images, setImages] = useState([] as any)

    const openImageFolder = () : void => {
        const input = document.getElementById('multiImage');

        if (input) input.click();
    }

    const getImagesPreview = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null) {
            setImages([...images, URL.createObjectURL(event.target.files[0])])
        }
    }

    return (
        <div className='create-post-image-carrousel-card' >
            <input style={{display: 'none'}} type="file" name="" id="multiImage" multiple onChange={getImagesPreview} maxLength={5} />
            <div style={{display: 'flex', marginRight: 5}} >
                {(images || []).map((url: string) : JSX.Element => {
                    return(
                        <img style={{width: 80, height: 80, marginRight: 5}} src={url} alt='...'/>
                    )
                })}
            </div>
            <CreatePostImageButton width={80} height={80} iconSize='2x' onClick={openImageFolder} />
        </div>
    )
}