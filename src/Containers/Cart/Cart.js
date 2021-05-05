import React, { Component } from 'react'
import Title from '../../UI/Title/Title'
import CartColumn from './CartColumn/CartColumn'
import EmptyCart from './EmptyCart/EmptyCart';
import {ProductConsumer} from '../../Context/Context';

export default class Cart extends Component {
    render() {
        return (
            <section>
            <ProductConsumer>
            {value=>{
                
                const cartItems=value.cart.map(item=>{
                    const {img,price,title,count,total}=item;
                    return <CartColumn img={img} brandName={title} price={price} count={count} total={total}/>
                }
                )
                return(
                    <>
                        <Title name="Your" title="Cart"/>
                        {cartItems}
                        <EmptyCart/>
                    </>
                );
            }}
                

            </ProductConsumer>
            </section>
        )
    }
}
