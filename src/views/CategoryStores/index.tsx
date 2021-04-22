import React from 'react';
import { RouteChildrenProps } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ICategoryStoresProps } from './CategoryStoresPropsInterface'
import { ICategoryStoresState } from './CategoryStoresStateInterface'
import { HomeNavbar } from '../../components/Navbars/HomeNavbar'
import { Header } from '../../components/Header'
import { CategoryStore } from '../../components/CategoryStore'
import { Images } from '../../assets/images'
import './style.css'
import { Loading } from '../../components/Loading';
import { NotificationPopUp } from '../../components/NotificationPopUp';

type TParams = {
    category: string;
}

class CategoryStores extends React.Component<RouteChildrenProps<TParams>, ICategoryStoresState> {

    constructor(props: RouteChildrenProps<TParams>) {
        super(props);

        this.state = {
            category: this.props.match?.params.category as string,
            message: '',
            loading: false,
            stores: []
        }
    }


    async componentDidMount() {

        this.setState({
            loading: true
        });

        await this.getStoresByCategory();

        this.setState({
            loading: false
        });

    }

    private getStoresByCategory = async () : Promise<void> => {
        try {
            const url = `http://localhost:4000/stores/category=${this.state.category}`;
    
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            const data = await response.json();
    
            this.setState({
                stores: data.stores
            });    
        } 
        
        catch (error) {
            this.setState({
                message: 'Something went wrong'
            })
        }
    }

    render() {
        return (
            <main>
                <Helmet>
                    <title>Stores in {this.state.category}</title>
                    <style>{'body { background-color: #eceff1; }'}</style>
                </Helmet>
                <HomeNavbar/>
                <div className='category-stores-title' >
                    <Header title={`Stores in ${this.state.category}`} fontSize={50} />
                </div>
                <div className='category-stores-container' >
                    <Loading isLoading={this.state.loading} />
                    {
                        this.state.stores.map((store: any) : JSX.Element => {
                            return (
                                <CategoryStore key={store.id} id={store.id} wallpaper={store.wallpaper} logo={store.profile_image} name={store.firstname} description={store.description} href={`/company/profile/cid=${store.id}`} />
                            )
                        })
                    }
                </div>
                { this.state.message && <NotificationPopUp msg={this.state.message} isError close={() => this.setState({ message: '' })} />}
            </main>
        )
    }
}

export default CategoryStores 