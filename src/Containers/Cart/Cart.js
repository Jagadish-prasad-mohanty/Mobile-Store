import React, { Component } from 'react'
import Title from '../../UI/Title/Title'
import CartColumn from './CartColumn/CartColumn'
import EmptyCart from './EmptyCart/EmptyCart';
import {ProductConsumer} from '../../Context/Context';
import CartItems from './CartItems/CartItems';
import CartTotals from './CartTotals/CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <section>
            <ProductConsumer>
            {value=>{
                let showCart=<EmptyCart/>

                if(value.cart.length){
                    showCart=(
                        <>
                        <CartColumn/>
                        <CartItems value={value}/>
                        <CartTotals value={value}/>
                    </>
                    )
                }
                
                return(
                    <>
                        <Title name="Your" title="Cart"/>
                        {showCart}
                        
                    </>
                );
            }}
                

            </ProductConsumer>
            </section>
        )
    }
}
