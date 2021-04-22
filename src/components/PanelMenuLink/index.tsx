import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IPanelMenuLinkPropsInterface } from './MenuLinkPropsInterface'
import './style.css'

export const PanelMenuLink = (props: IPanelMenuLinkPropsInterface) : JSX.Element => {
    
    const LinkableElement = () : JSX.Element => {
        return (
            <Link to={props.href ? props.href : ''} href='#' className={`panel-menu-link ${props.isRed ? 'red-link' : ''}`} onClick={props.onClick}>
                <FontAwesomeIcon color={'rgba(0, 0, 0, 0.8)'} icon={props.icon} size='1x' />
                <p>{props.title}</p>
            </Link>
        )
    }
    
    const ClickableElement = () : JSX.Element => {
        return (
            <div className={`panel-menu-link ${props.isRed ? 'red-link' : ''}`} onClick={props.onClick}>
                <FontAwesomeIcon color={'rgba(0, 0, 0, 0.8)'} icon={props.icon} size='1x' />
                <p>{props.title}</p>
            </div>
        )
    }

    return props.href ? <LinkableElement/> : <ClickableElement/>
}
