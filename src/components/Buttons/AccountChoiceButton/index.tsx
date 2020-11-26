import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { IAccountChoiceButtonProps } from './AccountChoiceButtonPropsInterface'


export const AccountChoiceButton = (props: IAccountChoiceButtonProps) : JSX.Element => {
    return (
        <div className='account-choice-button'>
            <div className='account-choice-button-description-container'>
                <div className='account-choice-button-description-icon' >
                    <FontAwesomeIcon icon={props.icon} size='lg' />
                </div>
                <div className='account-choice-button-description' >
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
            <FontAwesomeIcon icon={faLongArrowAltRight} size='lg' />
        </div>
    )
}