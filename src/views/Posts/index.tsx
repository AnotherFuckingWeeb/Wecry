import React from 'react'
import { Helmet } from 'react-helmet'
import { IPostsProps } from './PostsPropsInterface'
import { IPostsState } from './PostsStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { PostCard } from '../../components/PostCard'
import { Placeholder } from '../../components/Placeholder'
import './style.css'

class Posts extends React.Component<IPostsProps, IPostsState> {
    
    constructor(props: IPostsProps) {
        super(props)

        this.state = {
            result: !true
        }
    }
    
    render() : JSX.Element {
        return(
            <main>
                <Helmet>
                    <title>Wecry</title>
                    <style>{'body { background-color: #eceff1; }'}</style>
                </Helmet>
                <SearchBar/>
                {
                    !this.state.result ? <Placeholder/> : (
                        <div>
                            <div className='search-results'>
                                <h1>Search Results for... Television</h1>
                            </div>
                            <div className='search-results-container' >
                                <PostCard />
                                <PostCard />
                            </div>
                        </div>
                    )
                }
            </main>
        )
    }
}

export default Posts