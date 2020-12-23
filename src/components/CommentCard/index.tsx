import React from 'react'
import { ICommentCardProps } from './CommentCardPropsInterface'
import './style.css'

export const CommentCard = (props: ICommentCardProps) : JSX.Element => {
    return (
        <div className='comment-card' >
            <div className='comment-card-profile-information' >
                <div className='comment-card-profile-image' >
                    <img src={props.image} alt="" />
                </div>
                <p style={{ fontSize: 15, fontWeight: 'bold' }}>{props.username}</p>
            </div>
            <div style={{ width: '100%', paddingLeft: 20, paddingRight: 20 }} >
                <p style={{ fontSize: 15 }} >{props.comment}</p>
            </div>
        </div>
    )
}