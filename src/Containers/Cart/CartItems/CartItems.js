import React from 'react';
import CartItem from './CartItem/CartItem';

function CartItems({value}) {
    const {cart}=value;
    return (
        <div className="container-fluid">
            {cart.map(item=>(
                <CartItem key={item.id} item={item} value={value}/>
            ))}
        </div>
    )
}

export default CartItems;