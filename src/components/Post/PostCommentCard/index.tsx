import React, { useState } from 'react'
import { IPostCommentCardProps } from './PostCommentCardPropsInterface'
import { CommentForm } from './CommentForm'
import { UserIsNotLogged } from './UserIsNotLogged'
import { User } from '../../../utils/user'
import './style.css'


export const PostCommentCard = (props: IPostCommentCardProps) : JSX.Element => {
   
    const user = new User();

    const [isLoading, setLoading] = useState(false)
    const [commentError, setCommentError] = useState('');

    const onSubmit = async () : Promise<void> => {
        setLoading(true);
        
        if (isValidComment()) {
            await props.onSubmit()
        }
        
        setLoading(false);
    }

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => {
        props.onChange(event);
    }

    const isValidComment = () : boolean => {
        if (props.value === '') {
            setCommentError('Comment cannot be empty');
            return false;
        }
    
        else {
            return true;
        }
    }
 
    return (
        <div className='post-comment-card'>
            { user.Id ? <CommentForm 
                            isLoading={isLoading} 
                            value={props.value} 
                            onChange={onChange} 
                            commentError={commentError} 
                            onFocus={() => setCommentError('') } 
                            onSubmit={onSubmit} 
                        /> : <UserIsNotLogged/>  
            }
        </div>
    )
}