import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { HomeLink } from '../../HomeLink'
import { Images } from '../../../assets/images'
import './style.css'

export const SearchBar = () : JSX.Element => {

    const [search, setSearch] = useState('')

    const onChangeState = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const { value } = event.target
        setSearch(value)
    }

    return(
        <div className='search-bar'>
            <HomeLink />
            <div className='search-bar-input' >
                <input placeholder='Search products...' type="text" name="search" value={search} onChange={onChangeState} />
                <FontAwesomeIcon color={'rgba(0, 0, 0, 0.5)'} icon={faSearch} />
            </div>
            <Link to='profile' className='search-bar-user-profile'>
                <img src={Images.testtwo} alt="" />
                <h3>Yeferson Hidalgo</h3>
            </Link>
        </div>
    )
}