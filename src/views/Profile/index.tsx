import React from 'react'
import { Helmet } from 'react-helmet'
import { RouteChildrenProps } from 'react-router-dom'
import { IProfileProps } from './ProfilePropsInterface'
import { IProfileState } from './ProfileStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { PostCard } from '../../components/PostCard'
import { ProfileInfoCard } from '../../components/ProfileInfoCard'
import { Loading } from '../../components/Loading'
import { NotificationPopUp } from '../../components/NotificationPopUp'
import { User } from '../../utils/user'
import './style.css'

type Tparams = {
    uid: string
}

class Profile extends React.Component<RouteChildrenProps<Tparams>, IProfileState, IProfileProps> {

    private user: User = new User();

    constructor(props: RouteChildrenProps<Tparams>) {
        super(props);

        this.state = {
            user: {
                id: 0,
                profileImage: '',
                name: '',
                lastname: '',
                fullname: '',
                email: '',
                country: ''
            },
            posts: [],
            favorites: [],
            loading: false,
            isError: false,
            message: ''
        }
    }

    private getUserData = async () : Promise<void> => {
        try {
            const userId = this.props.match?.params.uid
            let url = `http://localhost:4000/userprofile/profile_id=${userId}`;
            
            if (this.user.Id) {
                url = `http://localhost:4000/userprofile/profile_id=${userId}/${this.user.Id}`;
            }

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            const data = await response.json();
    
            this.setState({
                ...this.state,
                user: {
                    id: data.user.id,
                    profileImage: data.user.profile_image,
                    name: data.user.firstname,
                    lastname: data.user.lastname,
                    fullname: `${data.user.firstname} ${data.user.lastname}`,
                    email: data.user.email,
                    country: data.user.country
                },
                posts: data.posts,
                favorites: data.favorites
            })

            console.log(data);
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    private isFavorite = (postId: number) : boolean => {
        let isFavorite = false;
        
        if (this.user.Id) {
            if (this.state.favorites !== undefined) {
                this.state.favorites.map((favorite: any) => {
                    if (favorite === null || undefined) {
                        return false;
                    }
    
                    else {
                        if (postId === favorite.post_id) {
                            isFavorite = true;
                        }
                    }
                });
            }
        }

        return isFavorite;

    }

    private deleteUser = async () : Promise<any> => {
        const url = `http://localhost:4000/userprofile/${this.user.Id}/delete`;

        const request = await fetch(url, {
            method: 'DELETE'
        });

        return request.json();
    } 


    private onHandleDelete = async () : Promise<void> =>  {
        try {
            this.setState({ loading: true })

            const response = await this.deleteUser();
            
            this.setState({
                message: response.msg,
                loading: false
            })
        
            this.user.SignOut();
            window.location.href = '/'
        } 
        
        catch (error) {
            this.setState({
                isError: true,
                message: 'Something went wrong'
            })
        }

        this.setState({
            loading: false
        })
    }

    async componentDidMount() {
        await this.getUserData();
    }

    render() : JSX.Element  {
        return (
            <main>
                <Helmet>
                    <title>{this.state.user.fullname}</title>
                    <style>{'body { background-color: #eceff1; }'}</style>
                </Helmet>
                <SearchBar/>
                <div className='profile-main-container' >
                    <Loading isLoading={this.state.loading} />
                    <div className='profile-posts-container' >
                        {
                            this.state.posts.map((post: any) : JSX.Element => {
                                return <PostCard key={post.id} id={post.id} image={post.image} title={post.title} price={post.price} description={post.description} isFavorite={this.isFavorite(post.id)} />
                            })
                        }
                    </div>
                    <ProfileInfoCard id={this.state.user.id} profileImage={this.state.user.profileImage} name={this.state.user.name} lastname={this.state.user.lastname} email={this.state.user.email} country={this.state.user.country} Delete={this.onHandleDelete} />
                </div>
                { this.state.message && <NotificationPopUp msg={this.state.message} isError={this.state.isError} close={() => this.setState({ message: '' })} /> }
            </main>
        )
    }
}

export default Profile
