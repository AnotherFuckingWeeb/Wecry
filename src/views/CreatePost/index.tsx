import React from 'react'
import { Helmet } from 'react-helmet'
import { ICreatePostProps } from './CreatePostPropsInterface'
import { ICreatePostState    } from './CreatePostStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { InputText } from '../../components/InputText'
import { Images } from '../../assets/images'
import { DescriptionInput } from '../../components/DescriptionInput'
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { CreatePostAddImageCard } from '../../components/CreatePost/CreatePostAddImageCard'
import { CreatePostImageCarrouselCard } from '../../components/CreatePost/CreatePostImageCarrouselCard'
import { InputSection } from '../../components/InputSection'
import { CategorySelect } from '../../components/CategorySelect'
import { NotificationPopUp } from '../../components/NotificationPopUp'
import { User } from '../../utils/user'
import './style.css'

const InitialState = {
    image: undefined,
    images: [],
    title: '',
    price: '',
    description: '',
    category: '',
    loading: false,
    isError: false,
    formErrors: {
        title: '',
        price: '',
        category: '',
        description: ''
    },
    message: ''
}

class CreatePost extends React.Component<ICreatePostProps, ICreatePostState> {

    private user: User = new User();

    constructor(props: ICreatePostProps) {
        super(props);

        this.state = InitialState;
    }

    private onChangeState = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) : void => {
       const { name, value } = event.target
    
        this.setState({
            ...this.state,
            [name] : value
        });
    }  

    private getImagePreview = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        
        if (event.target.files !== null) {
            this.setState({
                ...this.state,
                image: event.target.files[0] === undefined ? undefined : event.target.files[0]
            })
        }
    }

    private getImageCarrouselPreview = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        if (event.target.files !== null) {
            this.setState({
                ...this.state,
                images: [...this.state.images, event.target.files[0]]
            })
        }
    }

    private isValidTitle = () : boolean => {

        if (this.state.title === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    title: 'Title field cannot be empty'
                }
            })
        
            return false;
        }

        if (this.state.title.length > 50) {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    title: 'Title field must not exceed 50 characters length'
                }
            })

            return false;
        }

        else return true;
    }

    private isValidImages = () : boolean => {
        if (!this.state.image) {
            this.setState({
                message: 'Image cannot be null',
                isError: true
            })
            
            return false;
        }

        if (this.state.images.length < 1) {
            this.setState({
                message: 'Images cannot be empty',
                isError: true
            })

            return false;
        }
        
        else return true;
    }

    private isValidPrice = () : boolean => {
        if (this.state.price === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    price: 'Price field cannot be empty'
                }
            })

            return false;
        }

        else return true;
    }

    private isValidCategory = () : boolean => {
        if (this.state.category === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    category: 'Category field cannot be empty'
                }
            })

            return false;
        }

        else return true;
    }

    private isValidDescription = () : boolean => {
        if (this.state.description === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    description: 'Description field cannot be empty'
                }
            })
        
            return false;
        }

        else return true;
    }    

    private isValid = () : boolean => {
        const { isValidImages, isValidTitle, isValidPrice, isValidCategory, isValidDescription } = this; 
    
        return (isValidImages() && isValidTitle() && isValidPrice() && isValidCategory() && isValidDescription());
    }

    private createPost = async () : Promise<any> => {
        const formData = new FormData();

        formData.append("user_id", this.user.Id.toString());
        formData.append("post-image", this.state.image);
        
        for (let i = 0; i < this.state.images.length; i++) {
            formData.append("post-images", this.state.images[i]);
        }   

        formData.append("title", this.state.title);
        formData.append("price", this.state.price);
        formData.append("category", this.state.category);
        formData.append("description", this.state.description);

        const request = await fetch('http://localhost:4000/createpost', {
            method: 'POST',
            body: formData
        });

        return request.json();

    } 

    private cleanErrors = (field: string) : void => {
        this.setState({
            ...this.state,
            formErrors: {
                ...this.state.formErrors,
                [field] : ''
            }
        });
    }

    private onSubmit = async (event: React.FormEvent<HTMLFormElement>) : Promise<void> => {
        try {

            event.preventDefault();

            if (this.isValid()) {
                
                this.setState({
                    loading: true
                });

                const response = await this.createPost();

                this.setState({
                    loading: false,
                    message: response.msg
                });
            }
        } 
        
        catch (error) {          
            this.setState({
                loading: false,
                isError: true,
                message: 'Something went wrong'
            });
        }
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
                <section className='create-post-form-container'>
                    <Loading isLoading={this.state.loading} />
                    <form onSubmit={this.onSubmit} encType='multipart/form-data'>
                        <CreatePostAddImageCard image={this.state.image} onChange={this.getImagePreview} />
                        
                        <CreatePostImageCarrouselCard images={this.state.images} onChange={this.getImageCarrouselPreview} />

                        <InputSection width='100%' height={120} alignItems='center' justifyContent='center' flexDirection='column'>
                            <InputText placeholder='Add a title' name='title' value={this.state.title} type='text' onChange={this.onChangeState} maxLength={50} validate={this.state.formErrors.title} onFocus={() => this.cleanErrors('title')} />
                        </InputSection>

                        <InputSection width='100%' height={120} flexDirection='column' alignItems='center' justifyContent='center' >
                            <InputText placeholder='price' name='price' value={this.state.price} onChange={this.onChangeState} type='number' validate={this.state.formErrors.price} onFocus={() => this.cleanErrors('price')} />
                        </InputSection>

                        <InputSection width='100%' height={120} flexDirection='column' alignItems='center' justifyContent='center'>
                            <CategorySelect onChange={this.onChangeState} validate={this.state.formErrors.category} onFocus={() => this.cleanErrors('category')} />
                        </InputSection>

                        <InputSection width='100%' height={150} flexDirection='column' alignItems='center' justifyContent='center' >
                            <DescriptionInput placeholder='Add a description' name='description' value={this.state.description} onChange={this.onChangeState} validate={this.state.formErrors.description} onFocus={() => this.cleanErrors('description')} />
                        </InputSection>

                        <InputSection width='100%' height={100} alignItems='center' justifyContent='center'>
                            <ButtonStyleOne title='Post Product' />
                        </InputSection>
                    </form>
                    <div style={{position: 'fixed', top: '93%', left: '81%'}} >
                        { this.state.message && <NotificationPopUp isError={this.state.isError} msg={this.state.message} close={() => this.setState({ message: '' })} /> }
                    </div>
                </section>
            </main>
        )
    }
}


export default CreatePost