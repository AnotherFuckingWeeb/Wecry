import React, { useState } from 'react'
import { ICreatePostImageCarrouselCardProps } from '../CreatePostImageCarrouselCard/CreatePostImageCarrouselCardPropsInterface'
import { CreatePostImageButton } from '../CreatePostImageButton'
import './style.css'

export const CreatePostImageCarrouselCard = (props: ICreatePostImageCarrouselCardProps) => {

    const openImageFolder = () : void => {
        const input = document.getElementById('multiImage');

        if (input) input.click();
    }

    const getImagesPreview = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null) {
            props.onChange(event);
        }

        console.log(props.images)
    }

    return (
        <div className='create-post-image-carrousel-card' >
            <input style={{display: 'none'}} type="file" name="post-images" id="multiImage" multiple onChange={getImagesPreview} maxLength={5} />
            <div style={{display: 'flex', marginRight: 5}} >
                {(props.images || []).map((url: string): JSX.Element => {
                    return (
                        <img style={{ width: 80, height: 80, marginRight: 5 }} src={URL.createObjectURL(url)} alt='...' />
                    )
                })}
            </div>
            <CreatePostImageButton width={80} height={80} iconSize='2x' onClick={openImageFolder} />
        </div>
    )
}