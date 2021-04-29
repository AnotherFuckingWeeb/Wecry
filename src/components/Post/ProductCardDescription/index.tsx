import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IProductCardDescriptionProps } from './ProductCardDescriptionPropsInterface'
import { Header } from '../../Header';
import { ButtonStyleOne } from '../../Buttons/ButtonStyleOne';
import { CheckoutForm } from '../../CheckoutForm';
import { WarningModal } from '../../WarningModal'
import { User } from '../../../utils/user'
import './style.css'

export const ProductCardDescription = (props: IProductCardDescriptionProps) : JSX.Element => {

    const stripePromise = loadStripe("pk_test_51IhvECJ94vJXO5BcaAE161Ycd4FgSYlYEc2MYadNneJRGKIWEEHlVdc4rO23auFYuXxGt6PeXiCc9WmQbXj3noMw00yPCl1d9W");
    const user = new User();

    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [showWarningModal, setShowWarningModal] = useState(false);
    const [isFavorite, setIsFavorite] = useState(props.isFavorite)


    useEffect(() => {
        setIsFavorite(props.isFavorite)
    }, [props.isFavorite])

    const addToShoppingCart = async () : Promise<void> => {
        const url = 'http://localhost:4000/shoppingcart/add';
        const request = {
            userId: user.Id,
            postId: props.id
        };

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });
    }  

    const onHandleDelete = () => {
        props.Delete(props.id);
        setShowWarningModal(false);
    }

    const removeShoppingCart = async () : Promise<void> => {
        const url = `http://localhost:4000/shoppingcart/${props.id}/remove`;

        await fetch(url, {
            method: 'DELETE'
        });
    }

    const toggleShoppingCart = async () : Promise<void> => {
        if (!isFavorite) {
            await addToShoppingCart();
            setIsFavorite(true);
        }

        else {
            await removeShoppingCart();
            setIsFavorite(false);
        }
    }

    return (
        <div className='product-card-description' >
            <div className='product-card-description-title'>
                <Header title={props.title} fontSize={20} />
                { user.Id && ( 
                        <div style={{display: 'flex'}} >
                            <FontAwesomeIcon className='icon' color={isFavorite ? 'red' : 'rgba(0, 0, 0, 0.5)'} icon={faHeart} size='lg' onClick={toggleShoppingCart} /> 
                            { user.Id == props.userId && <FontAwesomeIcon className='icon' color='rgba(0, 0, 0, 0.5)' icon={faTrashAlt} size='lg' onClick={() => setShowWarningModal(true)} /> }
                        </div>
                    )
                }
            </div>
            <h1>$ {props.amount}</h1>

            <p>{props.description}</p>
            <div className='product-card-description-button'>
                <ButtonStyleOne title='Buy Product' onClick={() => setShowCheckoutForm(!showCheckoutForm)} />
            </div>
            <Elements stripe={stripePromise} >
                { showCheckoutForm && <CheckoutForm close={() => setShowCheckoutForm(false)} image={props.productImage} title={props.title} price={props.amount} /> }
            </Elements>
            { showWarningModal && (
                <WarningModal
                    iconOptions= {{
                        icon: faExclamationTriangle,
                        color: 'red',
                        size: '3x'
                    }}

                    title='Are you sure you want to delete this post'
                    description='There is not turning back to this action'
                    Close={() => setShowWarningModal(false)}
                    Next={onHandleDelete}
                />
            ) }
        </div>
    )
} 