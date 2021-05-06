import React from 'react'

const CartColumn =()=>  {
        return (
            <div className="container-fluid d-none d-lg-block text-center text-uppercase mt-5">
                 <div className="row">
                    <div className="col-10 mx-auto col-md-2 ">
                    <h6>product</h6>
                    </div>
                    <div className="col-10 mx-auto col-md-2 ">
                    <h6>brand name</h6>
                    </div>
                    <div className="col-10 mx-auto col-md-2 ">
                    <h6>price</h6>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                    <h6>quantity</h6>  
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                    <h6>remove</h6>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                    <h6>total</h6>
                    </div>
                 </div>
            </div>
        )
    }

    export default CartColumn;
