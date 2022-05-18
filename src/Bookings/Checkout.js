import React, { useContext } from 'react';
import CartContext from './cart-context';
import { Link, useHistory } from "react-router-dom";
import { formatCurrency } from "../modules/string";
import { withQuantities} from "./Cart"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from "./Form";

export default function Checkout(){
    const {cart} = useContext(CartContext);
    let length = cart.length - 1;
    return (
        <div className="App">

            <h1 className="header">Place Booking Now</h1>
            <table width={'100%'} cellSpacing={0} cellPadding={0} >
          <thead>
              <tr>
                  <th>Film</th>
                  <th>Adult Price</th>
                  <th>Child Price</th>
                  <th>Number of Seats</th>
                  <th>Subtotal</th>
                  <th>Total inc Tax</th>
              </tr>
          </thead>
          <tbody>
            {
                withQuantities(cart[length]).map((data) =>(
                    <tr key={data.id}>
                    <td>{data.mov_name}</td>
                    <td>{formatCurrency(data.adult_cost)}</td>
                    <td>{formatCurrency(data.children == 0 ? "0" : data.child_cost)}</td>
                    <td>{data.num_seats}</td>
                    <td>{formatCurrency(data.cost)}</td>
                    <td>{formatCurrency(((data.cost)*1.2).toFixed(2))}</td>
                </tr>
                ))}
          </tbody>
      </table>
      <hr/>

      <Elements stripe={loadStripe("pk_test_51JCnhiC2wJomvKLR2UNJLuJroyF9GEgGzyU06vAM1jFH1CIYjjLkw7vlu63QgfbERfjoflamLB5IWJSC33oR9KF600m7Gxu8Gh")}>
          <CheckoutForm />
      </Elements>
        </div>
    )
}