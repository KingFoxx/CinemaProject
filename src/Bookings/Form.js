import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "..//App.css"
import { Button, Col } from "react-bootstrap";

export default function CheckoutForm(){
    const stripe = useStripe()
    const elements = useElements();

    async function handleSubmit(e){
        e.preventDefault()

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card: elements.getElement(CardElement),
        })

        if(error){
            console.log(error);
        } else{
            console.log(paymentMethod);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <Col md={4} lg={4} className="StripeForm">
            <CardElement />
            </Col>
            <hr/>
             <Button type="submit" disabled={!stripe}>Pay Now</Button>
             <hr/>
        </form>
    );
}