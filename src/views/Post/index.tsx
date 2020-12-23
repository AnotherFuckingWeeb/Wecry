import React from 'react'
import { Helmet } from 'react-helmet'
import { IPostProps } from './PostPropsInterface'
import { IPostState } from './PostStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { ProductCardImagePreview } from '../../components/Post/ProductCardImagePreview'
import { ProductComments } from '../../components/Post/ProductComments'
import { ProductCardDescription } from '../../components/Post/ProductCardDescription'
import { PostCommentCard } from '../../components/Post/PostCommentCard'
import { ProductOwnerCard } from '../../components/Post/ProductOwnerCard'
import { ProductCardImageCarrousel } from '../../components/Post/ProductCardImageCarrousel'
import './style.css'

class Post extends React.Component<IPostProps, IPostState> {
    
    render() : JSX.Element {
        return(
            <main>
                <Helmet>
                    <style>{'body { background-color: #eceff1; }'}</style>
                </Helmet>
                <SearchBar/>
                <section className='post-main-section'>
                    <div className='post-section'>
                        <ProductCardImagePreview image='https://http2.mlstatic.com/home-theater-bluray-samsung-3d-51-nuevo-1000wat-D_NQ_NP_744897-MLV44145255389_112020-O.webp' />
                        <ProductCardImageCarrousel/>
                        <PostCommentCard/>
                        <ProductComments/>
                    </div>
                    <div className='post-section'>
                        <ProductCardDescription
                            title='Home Theater Bluray Samsung 3d 5.1 Nuevo 1000wat'
                            amount='$ 30.000'
                            description='Vendo bluray alta definicion nuevo de paquete me quiero suicidar'
                        />
                        <ProductOwnerCard id={9} image='https://randomuser.me/api/portraits/women/63.jpg' username='Yeferson Hidalgo' country='ve' />
                    </div>
                </section>
            </main>
        )
    }
}

export default Post;