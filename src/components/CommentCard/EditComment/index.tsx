import React, { useState } from 'react'
import { IEditCommentsProps } from './EditCommentPropsInterface'
import { InputText } from '../../InputText'
import './style.css'

export const EditComment = (props: IEditCommentsProps) : JSX.Element => {
    
    const [comment, setComment] = useState(props.comment);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const { value } = event.target
    
        setComment(value);
    }
     
    const editComment = async () : Promise<void> => {
        await props.edit(comment);
    }

    return (
        <>
            <InputText name='comment' value={comment} type='text' onChange={onChange} />
            <div className='edit-comment-buttons-container' >
                <button onClick={props.close} className='edit-comment-btn edit-comment-btn-red'>Cancel</button>
                <button onClick={editComment} className='edit-comment-btn edit-comment-btn-blue' >Edit</button>
            </div>
        </>
    )
}