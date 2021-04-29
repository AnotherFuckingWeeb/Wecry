import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IWarningModalProps } from './WarningModalPropsInterface';
import { ShadowBackground } from '../ShadowBackground';
import { Header } from '../Header';
import './style.css'

export const WarningModal = (props: IWarningModalProps) : JSX.Element => {
    return (
        <ShadowBackground>
            <div className='warning-modal' >
                <div>
                    <FontAwesomeIcon icon={props.iconOptions.icon} color={props.iconOptions.color} size={props.iconOptions.size} style={{ marginBottom: 10 }} />
                    <Header title={props.title} />
                    <p>{props.description}</p>
                </div>
                <div className='warning-modal-buttons-container' >
                    <button className='btn-cancel' onClick={props.Close}>Cancel</button>
                    <button className='btn-continue' onClick={props.Next}>Continue</button>
                </div>
            </div>
        </ShadowBackground>
    )
}