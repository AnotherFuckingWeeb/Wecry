import React from 'react';
import { PanelMenuLink } from '../PanelMenuLink'
import './style.css'

export const PanelMenu: React.FunctionComponent<{}> = ({ children }) : JSX.Element => {

    return (
        <div className='panel-menu' >
            {
                React.Children.map(children, (child : any) => {
                    if (child.type.name !== 'PanelMenuLink') {
                        throw new Error('PanelMenu only admits PanelMenuLink components');
                    }
                    
                    else {
                        return child;
                    }
                })
            }
        </div>
    )
} 