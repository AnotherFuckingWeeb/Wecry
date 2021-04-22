import React from 'react';
import ReactImageMagnify from 'react-image-magnify'
import { IZoomInImageProps } from './ZoomInImagePropsInterface'
import { ShadowBackground } from '../ShadowBackground'
import './style.css'

export const ZoomInImage = (props: IZoomInImageProps) : JSX.Element => {
    
    const imageUrl = `http://localhost:4000/uploads/${props.image}`

    return (
        <ShadowBackground >
            <div className='zoom-in-image' >
                <p>{props.image}</p>
                <ReactImageMagnify
                    enlargedImagePosition='beside'
                    isHintEnabled
                    shouldHideHintAfterFirstActivation={false}
                    enlargedImageContainerDimensions={{
                        width: 500,
                        height: 800
                    }}
                    {...
                        {
                            smallImage: {
                                alt: '',
                                isFluidWidth: false,
                                width: 800,
                                height: 800,
                                src: imageUrl
                            },
                            largeImage: {
                                alt: '',
                                width: 3000,
                                height: 3000,
                                src: imageUrl
                            }
                        }
                    }
                />
                <div className='zoom-in-image-buttons-container'>
                    <a href={imageUrl} target='_blank'>Open in new tab</a>
                    <p onClick={() => props.close()} >Exit</p>
                </div>
            </div>
        </ShadowBackground>
    )
}