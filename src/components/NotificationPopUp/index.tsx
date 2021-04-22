import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { INotificationPopUpProps } from './NotificationPopUpPropsInterface'
import './style.css'

export const NotificationPopUp = (props: INotificationPopUpProps) : JSX.Element => {

    return (
        <div className={`notification-pop-up ${props.isError ? 'error' : 'default'}`} >
            <div className='info-container' >
                <FontAwesomeIcon icon={faInfoCircle} />
                <p>{props.msg}</p>
            </div>
            <div className='close-container' onClick={props.close} >
                <p>Close</p>
            </div>
        </div>
    )
}