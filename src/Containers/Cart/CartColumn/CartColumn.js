import React, { Component } from 'react'

export default class CartColumn extends Component {
    render() {
        return (
            <div className="container-fluid d-noned d-lg-block text-center text-uppercase mt-5">
                 <div className="row">
                    <div className="col-10 mx-auto col-md-2 d-flex flex-column justify-content-around">
                    <h6>product</h6>
                    <img className="img-thumbnail" src={this.props.img}/>
                    </div>
                    <div className="col-10 mx-auto col-md-2 d-flex flex-column justify-content-around flex-fill">
                    <h6>brand name</h6>
                    <h5>{this.props.brandName}</h5>
                    </div>
                    <div className="col-10 mx-auto col-md-2 d-flex flex-column justify-content-around">
                    <h6>price</h6>
                    <h5>{this.props.price}</h5>
                    </div>
                    <div className="col-10 mx-auto col-md-2 d-flex flex-column justify-content-around">
                    <h6>quantity</h6>
                    <h5>{this.props.count}</h5>  
                    </div>
                    <div className="col-10 mx-auto col-md-2 d-flex flex-column justify-content-around">
                    <h6>remove</h6>
                    <h5>{this.props.price}</h5>
                    </div>
                    <div className="col-10 mx-auto col-md-2 d-flex flex-column justify-content-around">
                    <h6>total</h6>
                    <h5>{this.props.total}</h5>
                    </div>
                    {/* <div className="col-10 mx-auto col-md-2 ">brand name</div>
                    <div className="col-10 mx-auto col-md-2 ">price</div>
                    <div className="col-10 mx-auto col-md-2 ">quantity</div>
                    <div className="col-10 mx-auto col-md-2 ">remove</div>
                    <div className="col-10 mx-auto col-md-2 "></div> */}
                 </div>
            </div>
        )
    }
}
