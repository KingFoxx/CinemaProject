import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import CartContext from './cart-context'


function withQuantities(films){
    return films.reduce((acc, film) =>{
        const existing = acc.find(f => film.id === f.id)
        return existing
            ?[
            ...acc.map((f)=>
            f.id === film.id ? {...f, qty: f.qty +1}: f,
            ),
        ]
           : [...acc, {...film, qty: 1}];

    }, []);
}

export default function CartPage() {
  const {cart} = useContext(CartContext);
  console.log(cart)
    return (
      <div className='OpeningTimes'>
      <Container>
        <h1 className='header'>Booking Sumamry</h1><br/>
      <table width={'100%'} cellSpacing={0} cellPadding={0} >
          <thead>
              <tr>
                  <th>Film</th>
                  <th>Ticket Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Total</th>
              </tr>
          </thead>
          <tbody>
            {
                withQuantities(cart).map((film) =>(
                    <tr key={film.id}>
                    <td>{film.name}</td>
                    <td>{film.price}</td>
                    <td>{film.qty}</td>
                    <td>{film.qty * film.price}</td>
                    <td>{(film.qty*film.price)*1.2}</td>
                </tr>
                ))}
          </tbody>
      </table>
      </Container>
      </div>
  );
}