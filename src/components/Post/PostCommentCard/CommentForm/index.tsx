import React from 'react';
import { ICommentFormProps } from './CommentFormPropsInterface'
import { ButtonStyleOne } from '../../../Buttons/ButtonStyleOne';
import { DescriptionInput } from '../../../DescriptionInput';
import { Header } from '../../../Header';
import { Loading } from '../../../Loading';
import './style.css'

export const CommentForm = (props: ICommentFormProps) : JSX.Element => {
    return (
        <>
            <Loading isLoading={props.isLoading} />
            <div className='post-comment-card-title' >
                <Header title='Write a comment' />
            </div>
            <DescriptionInput width={'90%'} placeholder='put a comment' name='comment' value={props.value} onChange={props.onChange} validate={props.commentError} onFocus={props.onFocus} />
            <div className='post-comment-card-button'>
                <ButtonStyleOne title='post comment ' onClick={props.onSubmit} />
            </div>
        </>
    )
}