import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import CartContext from './cart-context';
import films from './film.json';


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
    
//   const film = films[id];

  const {cart} = useContext(CartContext);
  console.log("this is cart");
  let length = cart.length - 1;
  console.log(cart[length][0].id);
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
                withQuantities(cart[length]).map((data) =>(
                    <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.cost}</td>
                    <td>{data.num_seats}</td>
                    <td>{data.cost}</td>
                    <td>{(data.cost)*1.2}</td>
                </tr>
                ))}
          </tbody>
      </table>
      </Container>
      </div>
  );
}