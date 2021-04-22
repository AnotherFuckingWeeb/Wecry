import React from 'react'
import { IProductCommentsProps } from './ProductCommentsPropsInterface'
import { CommentCard } from '../../CommentCard'
import { Header } from '../../Header'
import './style.css'

export const ProductComments = (props: IProductCommentsProps) : JSX.Element => {
    
    const editComment = async (id: number, content: string) : Promise<void> => {
        await props.edit(id, content);
    }

    const deleteComment = async (id: number) : Promise<void> => {
        await props.delete(id);
    }
    
    return (
        <div className='product-comments' >
            <div className='product-comments-title'>
                <Header title={`Comments · ${props.comments.length}`} />
            </div>
            {
                props.comments.map((comment : any) : JSX.Element => {
                    return <CommentCard 
                            id={comment.id} 
                            user_id={comment.user_id}
                            image={comment.profile_image} 
                            username={`${comment.firstname} ${comment.lastname}`} 
                            comment={comment.content} 
                            date={comment.date} 
                            edit={editComment}
                            delete={deleteComment}
                        />
                })
            }
        </div>
    )
} 