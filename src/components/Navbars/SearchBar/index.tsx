import React, { useState } from 'react'
import { User } from '../../../utils/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { HomeLink } from '../../HomeLink'
import { UserPanelMenu } from '../../UserPanelMenu'
import { SignInButton } from './SignInButton'
import { UserInfo } from './UserInfo'
import './style.css'


export const SearchBar = () : JSX.Element => {

    const user : User = new User();

    const [search, setSearch] = useState('')
    const [showUserPanelMenu, setShowUserPanelMenu] = useState(false);

    const onChangeState = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const { value } = event.target
        setSearch(value)
    }

    const Search = (event: React.KeyboardEvent<HTMLInputElement>) : void => {
        if (event.key === 'Enter' ) {
            if (search) {
                window.location.href = `/posts/title=${search}`;
            }

            else {
                window.location.href = '/posts';
            }
        }
    }

    const ShowPanel = () : void => {
        setShowUserPanelMenu(!showUserPanelMenu)
    }

    return(
        <div className='search-bar'>
            <HomeLink />
            <div className='search-bar-input' >
                <input placeholder='Search products...' type="text" name="search" value={search} onChange={onChangeState} onKeyDown={Search} />
                <FontAwesomeIcon color={'rgba(0, 0, 0, 0.5)'} icon={faSearch} />
            </div>
            <div>
                { user.Id ? <UserInfo profileImage={user.ProfileImage} username={user.Fullname} onClick={ShowPanel} /> : <SignInButton/> }
                { showUserPanelMenu && <UserPanelMenu/> }
            </div>
        </div>
    )
}