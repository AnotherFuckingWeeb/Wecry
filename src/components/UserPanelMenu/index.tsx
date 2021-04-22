import React from 'react';
import { faUserCircle, faPlus, faEdit, faShoppingCart, faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { PanelMenu } from '../PanelMenu'
import { PanelMenuLink } from '../PanelMenuLink'
import { User } from '../../utils/user'

export const UserPanelMenu = () : JSX.Element => {
    
    const user = new User();

    const links = [
        {
            icon: faUserCircle,
            title: 'Profile',
            href: user.isCompany === true ? `/company/profile/cid=${user.Id}` : `/user/profile/uid=${user.Id}`
        },
        {
            icon: faShoppingCart,
            title: 'Shopping Cart',
            href: '/user/shopcart'
        },
        {
            icon: faPlus,
            title: 'Create Post',
            href: '/post/create'
        },
        {
            icon: faEdit,
            title: 'Edit Profile',
            href: user.isCompany === true?  `/company/profile/edit` : '/user/profile/edit'
        },
        {
            icon: faDoorClosed,
            title: 'Sign Out',
            href: '/',
            isRed: true,
            onClick: () => user.SignOut()
        }
    ];
    
    return (
        <PanelMenu>
            {
                links.map((link) : JSX.Element => {
                    return (
                        <PanelMenuLink icon={link.icon} title={link.title} href={link.href} isRed={link.isRed} onClick={link.onClick} />
                    )
                })
            }
        </PanelMenu>
    )
}