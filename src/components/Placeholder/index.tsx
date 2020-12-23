import React from 'react'
import { Images } from '../../assets/images'
import './style.css'

export const Placeholder = () : JSX.Element => {
    return (
        <div>
            <div className='placeholder-title'>
                <h1>Use the search bar to find the product you want</h1>
            </div>
            <div className='placeholder-image' >
                <img src={Images.placeholder} alt="" />
            </div>
        </div>
    )
}