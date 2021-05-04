import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import logo from '../../logo.svg';
import ButtonComponent from '../Button/Button';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <NavLink to="/" className="brand">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </NavLink>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <NavLink to="/" className="nav-link">
                            Products
                        </NavLink>
                    </li>
                    
                </ul>
             
                <NavLink to="/cart"  className="ml-auto nav-link">
                    <ButtonComponent cart>
                        <i className="fas fa-cart-plus mr-2"></i>
                        my cart
                    </ButtonComponent>
                </NavLink>
                    
            </NavWrapper>
        )
    }
}

const NavWrapper=styled.nav`
background:var(--mainBlue)
`


