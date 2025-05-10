export function addtoCart(id){
    const cart = id;
    saveCart({ pID: id });
}

export function saveCart(cart) {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    cartData.push(cart);
    localStorage.setItem('cart', JSON.stringify(cartData));
    alert("Added in cart successfully!!")
}

// export {addtoCart, saveCart}