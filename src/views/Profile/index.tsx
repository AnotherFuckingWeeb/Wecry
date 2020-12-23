import React from 'react'
import { Helmet } from 'react-helmet'
import { IProfileProps } from './ProfilePropsInterface'
import { IProfileState } from './ProfileStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { PostCard } from '../../components/PostCard'
import { ProfileInfoCard } from '../../components/ProfileInfoCard'
import './style.css'

class Profile extends React.Component<IProfileProps, IProfileState> {
    render() : JSX.Element  {
        return (
            <main>
                <Helmet>
                    <style>{'body { background-color: #eceff1; }'}</style>
                </Helmet>
                <SearchBar/>
                <div className='profile-main-container' >
                    <div className='profile-posts-container' >
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                    <ProfileInfoCard/>
                </div>
            </main>
        )
    }
}

export default Profile
