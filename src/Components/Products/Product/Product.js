import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../../Context/Context';
import PropTypes from 'prop-types';


export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                    {value=>{
                    return <div className="img-container p-5" onClick={()=>value.handleDetails(id)}>
                        <Link to="/details">
                            <img src={img} alt={title} className="card-img-top"/>
                        </Link>
                    <button className="cart-btn" onClick={
                        ()=>{
                            value.addToCart(id);
                            value.openModel(id);
                        }
                        }
                         disabled={inCart?true:false}>
                        {inCart?
                        (<p className="text-capitalize mb-0">In Cart</p>):
                        (<i className="fas fa-cart-plus"></i>)}

                    </button> 

                    </div>
                    }}
                    </ProductConsumer>

                    {/* Card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="mb-0 align-self-center">{title}</p>
                        <h5 className="text-blue font-italic mb-0">${price}</h5>
                    </div>

                </div>
                
            </ProductWrapper>
        )
    }
}

//set the prop types
Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
    })
}


const ProductWrapper = styled.div` 
.card{
    transition:all .5s ease;
}
.card-footer{
    border-top:transparent;
    background:transparent;
    transition:all .5s ease;

}
&:hover{
    .card{
        border:.4rem solid rgba(0,0,0,0,2);
        box-shadow:3px 3px 3px  0 rgba(0,0,0,0.2);
        transform:scale(1.01)
    }
    .card-footer{
        background:rgba(231,231,231)
    }
    .cart-btn{
        transform:translate(0)
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition: all .5s ease;
}
.img-container:hover .card-img-top{
    transform:scale(1.1)
}
.cart-btn{
    position :absolute;
    right:0;
    bottom:0;
    transition:all .8s ease;
    background:var(--lightBlue);
    color:var(--mainWhite);
    border:none;
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%)
}
.cart-btn:hover{
    background:var(--mainYellow);
    color:var(--lightBlue)
}

`