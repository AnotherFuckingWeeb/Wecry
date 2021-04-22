import Home from '../views/Home'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import UserSignUp from '../views/UserSignUp'
import CompanySignUp from '../views/CompanySignUp'
import Catalog from '../views/Catalog'
import FeaturedStores from '../views/FeaturedStores'
import Stores from '../views/Stores'
import Posts from '../views/Posts'
import Post from '../views/Post'
import Profile from '../views/Profile'
import CompanyProfile from '../views/CompanyProfile'
import CreatePost from '../views/CreatePost'
import EditProfile from '../views/EditProfile'
import ShopCart from '../views/ShopCart'
import EditCompanyProfile from '../views/EditCompanyProfile'
import CategoryStores from '../views/CategoryStores'
import Feedback from '../views/Feedback'
import NotFoundPage from '../views/NotFoundPage'


export const routes = [
    {
        exact: true,
        path: '/',
        component: Home
    },
    {
        exact: true,
        path: '/login',
        component: Login
    },
    {
        exact: true,
        path: '/signup',
        component: SignUp
    },
    {
        exact: true,
        path: '/user/signup',
        component: UserSignUp
    },
    {
        exact: true,
        path: '/company/signup',
        component: CompanySignUp
    },
    {
        exact: true,
        path: '/catalog',
        component: Catalog
    },
    {
        exact: true,
        path: '/stores/featured',
        component: FeaturedStores
    },
    {
        exact: true,
        path: '/stores',
        component: Stores
    },
    {
        exact: true,
        path: '/stores/category=:category',
        component: CategoryStores
    },
    {
        exact: true,
        path: '/posts',
        component: Posts
    },
    {
        exact: true,
        path: '/posts/title=:title',
        component: Posts
    },
    {
        exact: true,
        path: '/posts/category=:category',
        component: Posts
    },
    {
        exact: true,
        path: '/post',
        component: Post
    },
    {
        exact: true,
        path: '/post/post_id=:id',
        component: Post
    },
    {
        exact: true,
        path: '/user/profile/uid=:uid',
        component: Profile
    },
    {
        exact: true,
        path: '/company/profile/cid=:cid',
        component: CompanyProfile
    },
    {
        exact: true,
        path: '/post/create',
        component: CreatePost
    },
    {
        exact: true,
        path: '/user/profile/edit',
        component: EditProfile
    },
    {
        exact: true,
        path: '/user/shopcart',
        component: ShopCart
    },
    {
        exact: true,
        path: '/company/profile/edit',
        component: EditCompanyProfile
    },
    {
        exact: true,
        path: '/feedback',
        component: Feedback
    },
    {
        exact: true,
        component: NotFoundPage
    }
]