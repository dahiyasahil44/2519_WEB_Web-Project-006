export function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(item => item.pID === id);

    if (index !== -1) {
        cart[index].qty += 1;
    } else {
        cart.push({ pID: id, qty: 1 });
    }

    saveCart(cart);
}

export function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(item => item.pID === id);

    if (index !== -1) {
        cart[index].qty -= 1;
        // if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        // }
    }

    saveCart(cart);
}

export function clearCart() {
    localStorage.removeItem('cart');
}

export function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    // console.log("Cart Updated:", cart);
    // alert("Added to cart successfully!!")
}

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.getCart = getCart;
