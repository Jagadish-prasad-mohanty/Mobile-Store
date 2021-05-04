import React, { Component } from 'react';
import {ProductConsumer} from '../../Context/Context';

import styled from 'styled-components'
import ButtonComponent from '../Button/Button';
import { Link } from 'react-router-dom';

export default class Model extends Component {
    render() {
        return (
        <ProductConsumer>
        {value=>{
            const {img,price,title}=value.modelProduct;
            const {model,closeModel}=value
            if(!model){
                return null
            }
            return (

            <ModelWrapper onClick={()=>closeModel()}>
                <div className="container">
                    <div className="row">
                            <div id="model" className="col-8 mx-auto col-md-6 col-l-4 p-5 text-capitalize" 
                            onClick={(event)=>event.stopPropagation()}>
                                <h2>Item Added to cart</h2>
                                <img className="img-fluid" src={img} alt={title}/>
                                <h2>{title}</h2>
                                <h3> Price : <strong><span>$</span>{price}</strong></h3>
                                <Link to="/">
                                <ButtonComponent onClick={()=>closeModel()}>Store</ButtonComponent>
                                </Link>
                                <Link to="/cart">
                                <ButtonComponent cart onClick={()=>closeModel()}>Go to Cart</ButtonComponent>
                                </Link>
                            </div>

                    </div>
                
                </div>
            </ModelWrapper>
            )
        }}


        </ProductConsumer>
        );
    }
}


const ModelWrapper =styled.div `
background:rgba(0,0,0,0.3);
position :fixed;
top:0;
bottom:0;
left:0;
right:0;
display:flex;
justify-content:center;
align-items:center;
#model{
    background:var(--mainWhite);
    border-radius:0.2rem;
    box-shadow:3px 3px 5px #ccc;

}
`