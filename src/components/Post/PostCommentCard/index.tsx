import React, { useState } from 'react'
import { ButtonStyleOne } from '../../Buttons/ButtonStyleOne'
import { DescriptionInput } from '../../DescriptionInput'
import { Header } from '../../Header'
import './style.css'

export const PostCommentCard = () : JSX.Element => {
    
    const [comment, setComment] = useState('')

    const OnchangeState = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => {
        const { value } = event.target
        setComment(value)
        console.log(comment)
    }

    return (
        <div className='post-comment-card' >
            <div className='post-comment-card-title' >
                <Header title='Write a comment' />
            </div>
            <DescriptionInput width={'90%'} placeholder='put a comment' name='comment' value={comment} onChange={OnchangeState} />
            <div className='post-comment-card-button'>
                <ButtonStyleOne title='post comment ' />
            </div>
        </div>
    )
}