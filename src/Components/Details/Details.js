import React, { Component } from 'react';
import {ProductConsumer} from '../../Context/Context';
import {Link} from 'react-router-dom';
import ButtonContainer from '../../UI/Button/Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {id,title,img,price,company,info,inCart}=value.detailProduct;

                    return (
                        <div className="container py-5">
                        <div className="row">
                            <h1 className="mx-auto col-10 text-slanted text-blue text-center">{title}</h1>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <img className="img-fluid" src={img} alt={title}/>
                            </div>
                            <div className="col-10  col-md-6 text-left  my-3 text-capitalize">
                                <h2>model: {title}</h2>
                                <h4 className="text-title text-uppercase mt-3 mb-2">made by : <span className="text-uppercase">{company}</span></h4>

                                <h4 className="text-blue">
                                    <strong>
                                        price : <span>$</span>{price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">some information about the product</p>
                                <hr/>
                                <p className="text-muted text-justify lead">{info}</p>

                                <Link to="/">

                                <ButtonContainer back>back to product</ButtonContainer>
                                </Link>
                                <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{
                                    value.addToCart(id);
                                    value.openModel(id);
                                }}>{inCart?"In Cart":"add to cart"}</ButtonContainer>

                            </div>
                        </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
