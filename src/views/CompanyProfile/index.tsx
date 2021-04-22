import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ICompanyProfileProps } from './CompanyProfilePropsInterface'
import { ICompanyProfileState } from './CompanyProfileStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { CompanyInfoCard } from '../../components/CompanyInfoCard'
import { CompanyWallpaper } from '../../components/CompanyWallpaper' 
import './style.css'
import { ProductCard } from '../../components/ProductCard'

type TParams = {
    cid: string;
}

class CompanyProfile extends React.Component<RouteChildrenProps<TParams>, ICompanyProfileState, ICompanyProfileProps> {
    
    constructor(props: RouteChildrenProps<TParams>) {
        super(props);
        
        this.state = {
            company: {
                id: 0,
                wallpaper: '',
                logo: '',
                name: '',
                description: ''
            },

            posts: []
        }
    } 
    

    private getCompanyData = async () : Promise<void> => {
        try {
            const cid = this.props.match?.params.cid;
            const url = `http://localhost:4000/companyprofile/${cid}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            this.setState({
                ...this.state,
                company: {
                    id: data.company.id,
                    wallpaper: data.company.wallpaper,
                    logo: data.company.profile_image,
                    name: data.company.firstname,
                    description: data.company.description
                },
                posts: data.posts
            })
        } 
        
        catch (error) {
            console.log(error)    
        }
    }


    async componentDidMount() {
        await this.getCompanyData();
    }

    render() : JSX.Element {
        return (
            <main>
                <Helmet>
                    <title>{this.state.company.name}</title>
                    <style>{'body { background-color: #eceff1; }'}</style>
                </Helmet>
                <SearchBar/>
                <CompanyWallpaper wallpaper={this.state.company.wallpaper} />
                <div className='company-profile-main-container'>
                    <div className='company-info-card-container' >
                        <CompanyInfoCard id={this.state.company.id} logo={this.state.company.logo} name={this.state.company.name} description={this.state.company.description} />
                    </div>
                    <div className='company-profile-products-container' >
                        {
                            this.state.posts.map((post: any) : JSX.Element => {
                                return (
                                    <ProductCard id={post.id} image={post.image} price={post.price} title={post.title} />
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        )
    } 
}

export default CompanyProfile