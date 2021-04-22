import React from 'react'
import { Helmet } from 'react-helmet'
import { IShopCartProps } from './ShopCartPropsInterface'
import { IShopCartState } from './ShopCartStateInterface'
import { Header } from '../../components/Header'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { ProductCard } from '../../components/ProductCard'
import { User } from '../../utils/user'

class ShopCart extends React.Component<IShopCartProps, IShopCartState> {
    
    user: User = new User();

    constructor(props: IShopCartProps) {
        super(props)

        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = `http://localhost:4000/shoppingcart/${this.user.Id}`;

        const request = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'  
            }
        })

        const data = await request.json();

        this.setState({
            posts: data.posts
        })

    }
    
    render() : JSX.Element {
        return (
            <main>
                <Helmet>
                    <title>Shop Cart</title>
                    <style>{'body { background-color: #ebebeb; }'}</style>
                </Helmet>
                <SearchBar/>
                <div style={{textAlign: 'center', marginTop: 50}} >
                    <Header title='Your Shopping Cart' fontSize={40}  />
                </div>
                <div style={{padding: 30, display: 'flex', marginTop: 50}}>
                    {
                        this.state.posts.map((post: any) : JSX.Element => {
                            return (
                                <ProductCard id={post.post_id} image={post.image} title={post.title} price={post.price} />
                            )
                        })
                    }
                </div>
            </main>
        )
    }
}

export default ShopCart