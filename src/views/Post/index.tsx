import React from 'react'
import { Helmet } from 'react-helmet'
import Moment from 'moment'
import { RouteChildrenProps } from 'react-router-dom'
import { IPostProps } from './PostPropsInterface'
import { IPostState } from './PostStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { ProductCardImagePreview } from '../../components/Post/ProductCardImagePreview'
import { ProductComments } from '../../components/Post/ProductComments'
import { ProductCardDescription } from '../../components/Post/ProductCardDescription'
import { PostCommentCard } from '../../components/Post/PostCommentCard'
import { ProductOwnerCard } from '../../components/Post/ProductOwnerCard'
import { ProductCardImageCarrousel } from '../../components/Post/ProductCardImageCarrousel'
import { NotificationPopUp } from '../../components/NotificationPopUp'
import { User } from '../../utils/user'

import './style.css'
import { Loading } from '../../components/Loading'


type TParams = { 
    id: string
}

class Post extends React.Component<RouteChildrenProps<TParams>, IPostState, IPostProps> {
    
    private user: User = new User();

    constructor(props: RouteChildrenProps<TParams>) {
        super(props);

        this.state = {

            loading: false,
            comment: '',
            message: '',
            isError: false,

            post: {
                id: 0,
                image: '',
                title: '',
                price: '',
                description: '',
                isFavorite: false
            },

            user: {
                id: 0,
                profileImage: '',
                firstname: '',
                lastname: '',
                country: '',
                description: '',
                isCompany: false
            },

            postImages: [],
            comments: []
        }
    }

    private onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => {
        const { name, value } = event.target

        this.setState({
            ...this.state,
            [name] : value
        });
    }

    private getPostData = async () => {
        try {
            const postId = this.props.match?.params.id;
            let url = `http://localhost:4000/post/postId=${postId}/`;
    
            if (this.user.Id) {
                url = `http://localhost:4000/post/postId=${postId}/${this.user.Id}`;
            }

            this.setState({loading: true})

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            const data = await response.json();
    
            this.setState({
                ...this.state,
                post: {
                    id: data.post.id,
                    image: data.post.image,
                    title: data.post.title,
                    price: data.post.price,
                    description: data.post.description,
                    isFavorite: data.isFavorite
                },
    
                user: {
                    id: data.post_owner.id,
                    profileImage: data.post_owner.profile_image,
                    firstname: data.post_owner.firstname,
                    lastname: data.post_owner.lastname,
                    country: data.post_owner.country,
                    description: data.post_owner.description,
                    isCompany: data.post_owner.is_company
                },
    
                postImages: data.post_images,
                comments: data.comments,
                loading: false
            });
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    private postComment = async () : Promise<void> => {
        const postId = this.props.match?.params.id;
        const url = `http://localhost:4000/post/comment`;
        
        const request = {
            postId,
            userId: this.user.Id,
            content: this.state.comment,
            date: Moment().format('YYYY-MM-DD HH:mm:ss')
        };

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });

        this.setState({
            comment: ''
        })

        await this.getComments();
    }

    private getComments = async () : Promise<void> => {
        const postId = this.props.match?.params.id;
        const url = `http://localhost:4000/post/${postId}/comments`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        this.setState({
            ...this.state,
            comments: data.comments
        })
    }

    private editComment = async (id:number, content: string) : Promise<void> => {
        try {
            const url = `http://localhost:4000/post/comment/edit/${id}`;
            const request = {
                userId: this.user.Id,
                content
            };
    
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });
    
            await this.getComments();    
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    private deleteComment = async (id: number) : Promise<void> => {
        try {
            const url = `http://localhost:4000/post/comment/delete/${id}`;
            
            const request =  {
                userId: this.user.Id
            }
    
            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });
    
            await this.getComments();    
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    private deletePost = async (id: number) : Promise<void> => {
        try {
            const url = `http://localhost:4000/post/delete/${id}`;
        
            this.setState({ loading: true })

            const request = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                }
            });

            const response = await request.json();

            this.setState({
                message: response.msg,
                isError: false,
                loading: false
            })

            window.location.href = this.user.isCompany ? `/company/profile/cid=${this.user.Id}` : `/user/profile/uid=${this.user.Id}`;
        } 
        
        catch (error) {
            this.setState({
                message: 'Something went wrong',
                isError: true,
                loading: false
            });
        }
    }

    async componentDidMount() {
        await this.getPostData();
    }

    render() : JSX.Element {
        return(
            <main>
                <Helmet>
                    <title>{this.state.post.title}</title>
                    <style>{'body { background-color: #eceff1; }'}</style>
                </Helmet>
                <SearchBar/>
                <section className='post-main-section'>
                    <Loading isLoading={this.state.loading} />
                    <div className='post-section'>
                        <ProductCardImagePreview image={this.state.post.image} />
                        <ProductCardImageCarrousel images={this.state.postImages} />
                        <PostCommentCard onChange={this.onChange} onSubmit={this.postComment} value={this.state.comment} />
                        <ProductComments comments={this.state.comments} edit={this.editComment} delete={this.deleteComment} />
                    </div>
                    <div className='post-section'>
                        <ProductCardDescription
                            id={this.state.post.id}
                            userId={this.state.user.id}
                            productImage={this.state.post.image}
                            title={this.state.post.title}
                            amount={this.state.post.price}
                            description={this.state.post.description}
                            isFavorite={this.state.post.isFavorite}
                            Delete={this.deletePost}
                        />
                        <ProductOwnerCard 
                            id={this.state.user.id} 
                            image={this.state.user.profileImage} 
                            username={`${this.state.user.firstname} ${this.state.user.lastname !== null ? this.state.user.lastname : ''}`} 
                            country={this.state.user.country} 
                            description={this.state.user.description} 
                            isCompany={this.state.user.isCompany} 
                        />
                    </div>
                </section>
                { this.state.message && <NotificationPopUp isError={this.state.isError} msg={this.state.message} close={() => this.setState({ message: '' })} /> }
            </main>
        )
    }
}

export default Post;