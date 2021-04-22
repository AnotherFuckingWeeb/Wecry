import React, { useState } from 'react';
import { faClock, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ICommentCardPanelMenuProps } from './CommentCardPanelMenuPropsInterface'
import { PanelMenu } from '../../PanelMenu';
import { PanelMenuLink } from '../../PanelMenuLink';

export const CommentCardPanelMenu = (props: ICommentCardPanelMenuProps) : JSX.Element => {

    const showEditPanel = () : void => {
        props.showEditPanel();
    }

    const deleteComment = async () : Promise<void> => {
        await props.deleteComment();
    } 

    return (
        <PanelMenu >
            <PanelMenuLink icon={faClock} title='Edit Comment' onClick={showEditPanel} />
            <PanelMenuLink icon={faTrash} isRed title='Delete' onClick={deleteComment} />
        </PanelMenu>
    )
}