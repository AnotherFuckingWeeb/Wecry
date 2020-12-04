import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Images } from '../../assets/images'
import { CompanyCard } from '../../components/CompanyCard'
import { UserCard } from '../../components/UserCard'
import { HomeLink } from '../../components/HomeLink'
import './style.css'

class Home extends React.Component<{}, {
        name: string,
        picture: string,
        country: string,
        users: Array<any>
}> {

    constructor(props: {}) {
        super(props);

        this.state =  {
            name: '',
            picture: '',
            country: '',
            users: []
        }
    }

    private Links : Array<object> = [
        {
            text: "Catalog",
            href: "catalog"
        },
        {
            text: "Stores",
            href: "stores"
        },
        {
            text: "Login",
            href: "login"
        },
        {
            text: "SignUp",
            href: "signup"
        }
    ]

    private Companies : Array<object> = [
        {
            wallpaper: Images.test,
            logo: Images.testtwo,
            name: 'Wix',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe pariatur odio dignissimos at dolores illo iste aspernatur, quia rem!',
        },
        {
            wallpaper: Images.test,
            logo: Images.testtwo,
            name: 'Seele',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe pariatur odio dignissimos at dolores illo iste aspernatur, quia rem!',
        },
        {
            wallpaper: Images.test,
            logo: Images.testtwo,
            name: 'Surfaceo',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe pariatur odio dignissimos at dolores illo iste aspernatur, quia rem!',
        },
        {
            wallpaper: Images.test,
            logo: Images.testtwo,
            name: 'Nike',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe pariatur odio dignissimos at dolores illo iste aspernatur, quia rem!',
        }
    ]

    async componentDidMount() {
        const url = 'https://randomuser.me/api/?results=4';

        const response = await fetch(url)

        const data = await response.json();

        this.setState({
            name: `${data.results[0].name.first} ${data.results[0].name.last}`,
            picture: data.results[0].picture.large,
            country: data.results[0].nat,
            users: data.results
        })
    }

    render() : JSX.Element {
        return(
            <main>
                <Helmet>
                    <title>Wecry</title>
                </Helmet>
                <header className='home-navbar' >
                    <div className='home-navbar-logo' >
                        <HomeLink/>
                    </div>
                    <nav className='home-navbar-nav' >
                        <ul>
                            {
                                this.Links.map((link: any) : JSX.Element => {
                                    return(
                                        <li>
                                            <Link to={link.href}>{link.text}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </header>
                <section className='section' >
                    <div className='yellow-card'>
                        <div className='yellow-card-image-container'>
                            <img src={Images.Urban}/>
                        </div>
                        <div className='yellow-card-title' >
                            <h2>Buy Anything Sell Anything</h2>
                            <div className='yellow-card-description'>
                                <p>Wecry is the website that allows you to get rid of those things that you no longer use and earn money for it! From that old bike to your TV you bought last year, there is nothing wecry won't let you sell. If selling is not enough for you, you can also buy the things that other people (and companies) have for sale.</p>
                            </div>
                            <Link to='signup' className='yellow-card-signup-button'>Sign Up</Link>
                        </div>
                    </div>
                </section>
                <section className='section-color-one'>
                    <div className='section-container'>
                        <div className='section-container-img-container'>
                            <img src={Images.HomeSafety}/>
                        </div>
                        <div className='section-container-description'>
                            <h2>Buy And Sell From Home Safety</h2>
                            <div className='description-container'>
                                <p>Wecry, as it is not a physical market, provides you with a unique digital commerce experience where the only way to do business is through the internet, agreeing with the person you are trading.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-color-two' >
                    <div className='section-container' >
                        <div className='section-container-description'>
                            <h2>Track The Commerce Flow Everywhere</h2>
                            <div className='description-container' >
                                <p>Going shopping, walking the dog, a walk to the park or even at work or on a business trip, you can follow the flow of marketing your product or buy products for sale wherever you are from your phone, laptop or computer</p>
                            </div>
                        </div>
                        <div className='section-container-img-container'>
                            <img src={Images.TrackEveryWhere}/>
                        </div>
                    </div>
                </section>
                <section className='section-color-three' >
                    <div className='carousel-container'>
                        <h2>Big Companies And Small Business Love Wecry!</h2>
                        <div className='description-container'>
                            <p>From mass companies to small entrepreneurial businesses, Wecry is for everyone!</p>
                        </div>
                        <div className='carousel'>
                            {
                                this.Companies.map((company: any) : JSX.Element => {
                                    return(
                                        <CompanyCard wallpaper={company.wallpaper} logo={company.logo} name={company.name} description={company.description} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                <section className='section-color-four'>
                    <div className='user-opinion-container' >
                        <h2>See what our users say about Wecry</h2>
                        <div className='description-container'>
                            <p>Our users has dedicated a few words about how satisfied they are with Wecry</p>
                        </div>
                        <div className='user-opinion-carousel'>
                            {
                                this.state.users.map((user: any) : JSX.Element => {
                                    return (
                                        <UserCard name={`${user.name.first} ${user.name.last}`} picture={user.picture.large} country={user.nat} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Home;

