import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

import Products from '../../Components/Products/Products';
import Navbar from '../../UI/Navbar/Navbar';
import Cart from '../Cart/Cart';
import Default from '../../Components/Default/Default';
import Details from '../../Components/Details/Details';
import Model from '../../UI/Model/Model';
export default class Store extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Products}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/cart" component={Cart}/>
                    <Route component={Default}/>
                </Switch>

                <Model/>
            </>
        )
    }
}
