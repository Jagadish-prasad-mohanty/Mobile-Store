import React, { Component } from 'react';
import {detailProduct,storeProducts} from '../data';

//Creating a context
const ProductContext=React.createContext();

//Provider

class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        model:false,
        modelProduct:"",
        cartSubPrice:0,
        cartTax:0,
        cartTotalPrice:0
    }

    componentDidMount(){
        this.getCopyOfStoreProduct();
    }

    getItem=(id)=>{
        const product=this.state.products.find(prod=> prod.id===id)
        return product
    }

    handleDetails=(id)=>{
        let product=this.getItem(id);
        this.setState(()=>{return {detailProduct:product}})
    }

    openModel=(id)=>{
        let product=this.getItem(id);
        this.setState(()=>{return {modelProduct:product,model:true}})
    }
    closeModel=()=>{
        this.setState(()=>{return{model:false}})
    }

    increment =(id)=>{
        console.log(`Hello from increment ${id}`);
    }
    decrement= (id) =>{
        console.log(`hello from decrement ${id}`);
    }

    removeItem= (id) =>{
        console.log(`Hello from removeCart ${id}`);
    }

    clearCart = () =>{
        console.log('Cart has been cleared');
    }


    addToCart= (id) =>{
        const index=this.state.products.indexOf(this.getItem(id));
        const tempProducts=this.state.products;
        const tempProduct=tempProducts[index];
        tempProduct.inCart=true;
        tempProduct.count=1;
        const price=tempProduct.price;
        tempProduct.total=price;
        tempProducts[index]=tempProduct;
        this.setState(()=>{
            return {products:tempProducts,cart:[...this.state.cart,tempProduct]}
        },()=>console.log(this.state))
        
    }

    getCopyOfStoreProduct(){
        let tempProducts=[];
        storeProducts.forEach((product)=>{
            const singleProduct={...product};
            tempProducts=[...tempProducts,singleProduct];
        })

        this.setState(()=>{
            return {products:tempProducts}
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails:this.handleDetails,
                addToCart:this.addToCart,
                openModel:this.openModel,
                closeModel:this.closeModel,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

//Consumers

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer};