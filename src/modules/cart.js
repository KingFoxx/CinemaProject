export function addToCart(film){
    const cart = getCartItems();
    localStorage.setItem('cart',JSON.stringify([...cart,film]));
}

export function getCartItems(){
    const data = localStorage.getItem('cart');
    if (!data) return [];
    return JSON.parse(data);
}

export function removeFromCart(film){}

export function clearCart() {}
