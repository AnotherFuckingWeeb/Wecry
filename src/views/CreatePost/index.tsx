import React from 'react'
import { Helmet } from 'react-helmet'
import { ICreatePostProps } from './CreatePostPropsInterface'
import { ICreatePostState    } from './CreatePostStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { Header } from '../../components/Header'
import { InputText } from '../../components/InputText'
import { Images } from '../../assets/images'
import { DescriptionInput } from '../../components/DescriptionInput'
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { CreatePostAddImageCard } from '../../components/CreatePost/CreatePostAddImageCard'
import { CreatePostImageCarrouselCard } from '../../components/CreatePost/CreatePostImageCarrouselCard'
import { CreatePostInputSection } from '../../components/CreatePost/CreatePostInputSection'
import './style.css'

class CreatePost extends React.Component<ICreatePostProps, ICreatePostState> {

    constructor(props: ICreatePostProps) {
        super(props);

        this.state = {
            title: '',
            price: '',
            description: ''
        }
    }

    onChangeState = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) : void => {
       const { name, value } = event.target
    
        this.setState({
            ...this.state,
            [name] : value
        })
    }  

    printData = () => {
        alert(this.state.description)
    }

    render() : JSX.Element {
        return (
            <main>
                <Helmet>
                    <title>Create Post</title>
                    <style>{'body { background-color: #ebebeb; }'}</style>
                </Helmet>
                <SearchBar/>
                <section className='create-post-banner-container' >
                    <div className='create-post-banner' >
                        <img src={Images.createPost} alt="" />
                        <Header title='Create a post to sell the things you dont want anymore by adding a title, a price and some images' />
                    </div>
                </section>
                <section className='create-post-form-container' >
                    <form>
                        <CreatePostAddImageCard />
                        <CreatePostImageCarrouselCard />

                        <CreatePostInputSection height={100} justifyContent >
                            <InputText placeholder='Add a title' name='title' value={this.state.title} type='text' onChange={this.onChangeState} />
                        </CreatePostInputSection>

                        <CreatePostInputSection height={100} justifyContent >
                            <b>$</b>
                            <InputText placeholder='price' name='price' value={this.state.price} onChange={this.onChangeState} type='text' />
                        </CreatePostInputSection>

                        <CreatePostInputSection height={150} justifyContent >
                            <DescriptionInput placeholder='Add a description' name='description' value={this.state.description} onChange={this.onChangeState} />
                        </CreatePostInputSection>

                        <CreatePostInputSection height={100} justifyContent>
                            <ButtonStyleOne title='Post Product' onClick={this.printData} />
                        </CreatePostInputSection>
                    </form>
                </section>
            </main>
        )
    }
}


export default CreatePost