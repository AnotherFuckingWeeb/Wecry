import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { IPostsProps } from './PostsPropsInterface'
import { IPostsState } from './PostsStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { PostCard } from '../../components/PostCard'
import { Placeholder } from '../../components/Placeholder'
import { NotificationPopUp } from '../../components/NotificationPopUp'
import { User } from '../../utils/user'
import './style.css'


type TParams = { 
    title: string;
    category: string
}

class Posts extends React.Component<RouteChildrenProps<TParams>, IPostsState, IPostsProps> {
    
    private user: User = new User();

    constructor(props: RouteChildrenProps<TParams>) {
        super(props)

        this.state = {
            searchTerm: '',
            posts: [],
            favorites: []
        }
    }

    private getPostsByTitle = async () : Promise<void> => {
        try {
            const title = this.props.match?.params.title;
            let url;

            if (this.user.Id) url = `http://localhost:4000/posts/title=${title}/${this.user.Id}`
            
            else  url = `http://localhost:4000/posts/title=${title}`
    
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
    
            const data = await response.json();
    
            this.setState({
                searchTerm: title,
                posts: data.posts,
                favorites: data.favorites
            })
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    private getPostsByCategory = async () : Promise<void> => {
        try {
            const category = this.props.match?.params.category;
            let url;
            
            if (this.user.Id) url = `http://localhost:4000/posts/category=${category}/${this.user.Id}`
            
            else  url = `http://localhost:4000/posts/category=${category}`
    
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
    
            const data = await response.json();
    
            this.setState({
                searchTerm: category,
                posts: data.posts,
                favorites: data.favorites
            })
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    private isFavorite = (postId: number) : boolean => {
        let isFavorite = false;
        
        this.state.favorites.map((favorite) => {
            if (favorite === null || undefined) {
                return false;
            }

            else {
                if (postId === favorite.post_id) {
                    isFavorite = true;
                }
            }
        })

        return isFavorite

    }

   async componentDidMount() {
       if (this.props.match?.params.title) {
           await this.getPostsByTitle();
       }

       else {
           await this.getPostsByCategory();
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
                <div>
                {
                    !this.state.posts.length ? <Placeholder/> : (
                        <div>
                            <div className='search-results'>
                                <h1>Search Results for... {this.state.searchTerm}</h1>
                            </div>
                            <div className='search-results-container' >
                                {
                                    this.state.posts.map((post : any) : JSX.Element => {
                                        return (
                                            <PostCard key={post.id} id={post.id} image={post.image} title={post.title} price={post.price} description={post.description} isFavorite={this.isFavorite(post.id)} />
                                        )
                                    } )
                                }
                            </div>
                        </div>
                    )
                }
                </div>
            </main>
        )
    }
}

export default Posts