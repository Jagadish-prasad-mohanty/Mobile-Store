import React, { Component } from 'react';
import Title from '../../UI/Title/Title';
import Product from './Product/Product';
import {ProductConsumer} from '../../Context/Context';

export default class Products extends Component {
    state={
        products:[]
    }
    render() {
        return (
            <>
            <div className="py-5">
            <div className="container">
            <Title name="store" title="products"/>
            <div className="row">
                <ProductConsumer>
                    {(value)=>{
                        return value.products.map(product=>{
                            return <Product key={product.id} product={product}/>
                        })

                    }}
                </ProductConsumer>
            </div>
            </div>

            </div>
            </>
        )
    }
}
