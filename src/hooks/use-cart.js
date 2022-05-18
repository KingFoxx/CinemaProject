import {useState} from 'react';

export default function useCart(){
    const [cart, setCart] = useState([]);

    function addToCart(film) {
        setCart((prev) => [...prev, film]);
    }

    return {
        cart,
        addToCart,
    };
}