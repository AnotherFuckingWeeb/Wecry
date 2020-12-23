import Home from '../views/Home'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import UserSignUp from '../views/UserSignUp'
import CompanySignUp from '../views/CompanySignUp'
import Catalog from '../views/Catalog'
import Stores from '../views/Stores'
import Posts from '../views/Posts'
import Post from '../views/Post'
import Profile from '../views/Profile'
import CompanyProfile from '../views/CompanyProfile'
import CreatePost from '../views/CreatePost'
import EditProfile from '../views/EditProfile'

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
        path: '/useregister',
        component: UserSignUp
    },
    {
        exact: true,
        path: '/companyregister',
        component: CompanySignUp
    },
    {
        exact: true,
        path: '/catalog',
        component: Catalog
    },
    {
        exact: true,
        path: '/stores',
        component: Stores
    },
    {
        exact: true,
        path: '/posts',
        component: Posts
    },
    {
        exact: true,
        path: '/post',
        component: Post
    },
    {
        exact: true,
        path: '/profile',
        component: Profile
    },
    {
        exact: true,
        path: '/companyprofile',
        component: CompanyProfile
    },
    {
        exact: true,
        path: '/createpost',
        component: CreatePost
    },
    {
        exact: true,
        path: '/editprofile',
        component: EditProfile
    }
]