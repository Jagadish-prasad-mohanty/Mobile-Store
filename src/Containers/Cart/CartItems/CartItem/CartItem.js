import React from 'react'

function CartItem({item ,value}) {
    const {id,title,img,price,total,count}=item;
    const {increment,decrement,removeItem}=value;
    return (
        <div className="row text-capitalize text-center my-3">
            <div className="col-10 mx-auto col-lg-2">
                <img className="imag-fluid" src={img} style={{height:"5rem",width:"5rem"}} alt={title}/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Price : </span>
                ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                    </div>
                    <div>
                        <span className="btn btn-black mx-1" >{count}</span>
                    </div>
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : ${total}</strong>
            </div>
            
            
        </div>
    )
}

export default CartItem
