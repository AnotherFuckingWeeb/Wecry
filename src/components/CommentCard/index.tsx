import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faClock } from '@fortawesome/free-solid-svg-icons'
import { ICommentCardProps } from './CommentCardPropsInterface'
import { CommentCardPanelMenu } from './CommentCardPanelMenu'
import { EditComment } from './EditComment'
import { Loading } from '../Loading'
import { User } from '../../utils/user';
import './style.css'

export const CommentCard = (props: ICommentCardProps) : JSX.Element => {

    const user = new User();

    const [showPanelMenu, setShowPanelMenu] = useState(false);
    const [showEditComment, setShowEditComment] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const showPanel = () : void => {
        setShowPanelMenu(!showPanelMenu);
    }

    const showEditCommentPanel = () : void => {
        setShowEditComment(true);
        setShowPanelMenu(false);
    }

    const closeShowEditCommentPanel = () : void => {
        setShowEditComment(false);
    }

    const editComment = async (content: string) : Promise<void> => {
        setIsLoading(true);
        if (content) await props.edit(props.id, content);
        else await deleteComment();
        setIsLoading(false);
        setShowEditComment(false);
    }

    const deleteComment = async () : Promise<void> => {
        setIsLoading(true);
        await props.delete(props.id);
        setIsLoading(false);
    } 

    return (
        <div className='comment-card'>
            <Loading isLoading={isLoading} />
            <div className='comment-card-profile-information'>
                <div className='comment-card-profile-image' >
                    <img src={`http://localhost:4000/uploads/${props.image}`} alt="" />
                </div>
                <div className='comment-card-username-container'>
                    <Link to={`/user/profile/uid=${props.user_id}`}>{props.username}</Link>
                    { (user.Id == props.user_id) && <div>
                        <div className='comment-card-menu' onClick={showPanel} >
                            <FontAwesomeIcon icon={faEllipsisH} size='lg' />
                        </div>
                        {
                            showPanelMenu && <CommentCardPanelMenu showEditPanel={showEditCommentPanel} deleteComment={deleteComment} />
                        }
                    </div> }
                </div>
            </div>
            <div className='comment-card-content' >
                { showEditComment ? <EditComment comment={props.comment} edit={editComment} close={closeShowEditCommentPanel} />  : <p>{props.comment}</p> }
            </div>
            <div className='comment-card-date'>
                <FontAwesomeIcon icon={faClock} />
                <Moment fromNow>{props.date}</Moment>
            </div>
        </div>
    )
}