import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { ICheckoutFormProps } from './CheckoutFormPropsInterface'
import { Header } from '../Header'
import { ButtonStyleOne } from '../Buttons/ButtonStyleOne';
import { ShadowBackground } from '../ShadowBackground'
import { NotificationPopUp } from '../NotificationPopUp'

import { Loading } from '../Loading'
import './style.css'

export const CheckoutForm = (props: ICheckoutFormProps) : JSX.Element => {

   const stripe = useStripe();
   const elements = useElements();

   const [notificationState, setNotificationState] = useState({
       message: '',
       isError: false
   })

   const [isLoading, setIsLoading] = useState(false);

   const postPayment = async (id: string | undefined, amount: number) : Promise<any> => {
       const url = 'http://localhost:4000/payment/checkout';
       const body = {
           id,
           amount
       }

       const request = await fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(body)
       });

       return request.json();
    }

   const handleSubmit = async () : Promise<void> => {
       try {
            if (stripe === null) throw new Error("BUG: Stripe is null");

            if (elements === null) throw new Error("BUG: Stripe Elements is null");

            const element = elements.getElement(CardElement);

            if (element === null) throw new Error("BUG: Stripe Elements is null");

            setIsLoading(true);

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: element
            });

            if (!error) {
                const data = await postPayment(paymentMethod?.id, 100000);
                
                setNotificationState({
                    ...notificationState,
                    message: data.msg
                });
            }

            elements.getElement(CardElement)?.clear()
        
        } 
       
       catch (error) {
            
            setNotificationState({
                message: 'Transaction could be processed',
                isError: true
            });

            setIsLoading(false);
       }

       setIsLoading(false);
   }

    return (
        <ShadowBackground>
            <div className='checkout-form'>
                <Loading isLoading={isLoading} />
                <img src={`http://localhost:4000/uploads/${props.image}`} alt=""/>
                <div className='checkout-form-body' >
                    <Header title={props.title} />
                    <Header title={`$ ${props.price}`} />
                    <div className='checkout-form-body-input-card'>
                        <CardElement options={
                            {
                                style: {
                                    base: {
                                        fontSize: '20px'
                                    }
                                }
                            }
                        } />
                    </div>
                    <ButtonStyleOne title='Buy Product' onClick={handleSubmit}/>
                </div>
            </div>
            <div className='checkout-form-cancel-button-container' >
                <p onClick={props.close} >Close</p>
            </div>
            { notificationState.message && <NotificationPopUp msg={notificationState.message} isError={notificationState.isError} close={() => setNotificationState({
                ...notificationState,
                message: ''
            })} /> }
        </ShadowBackground>
    )
}