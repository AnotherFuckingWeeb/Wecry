import React from 'react'
import { CommentCard } from '../../CommentCard'
import { Header } from '../../Header'
import './style.css'

export const ProductComments = () : JSX.Element => {
    return (
        <div className='product-comments' >
            <div className='product-comments-title'>
                <Header title='Comments' />
            </div>
            <CommentCard image='https://randomuser.me/api/portraits/women/63.jpg' username='Margaret Rosamine' comment='Hola. Venderías solo el blueray? Sin las cornetas. Precio. ? ojo no quiero las cornetas' />
        </div>
    )
} 