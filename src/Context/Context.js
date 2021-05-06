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
        cartSubTotal:0,
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
        const index=this.state.products.indexOf(this.getItem(id));
        const tempProducts=this.state.products;
        const tempProduct=tempProducts[index];
        let count=tempProduct.count;
        tempProduct.count=count+=1;
        const price=tempProduct.price;
        this.addTotal(price);
        tempProducts[index]=tempProduct;
        this.setState(()=>{return {products:tempProducts}})
    }
    decrement= (id) =>{
        const index=this.state.products.indexOf(this.getItem(id));
        const tempProducts=this.state.products;
        const tempProduct=tempProducts[index];
        let count=tempProduct.count;
        if(count===1){
            this.removeItem(id);
        }
        else{
            tempProduct.count=count-=1;
            const price=tempProduct.price;
            this.subTotal(price);
            tempProducts[index]=tempProduct;
            this.setState(()=>{return {products:tempProducts}})
        }
    }

    removeItem= (id) =>{
        const index=this.state.products.indexOf(this.getItem(id));
        const tempProducts=this.state.products;
        const tempProduct=tempProducts[index];
        tempProduct.inCart=false;
        tempProduct.count=0;
        tempProduct.total=0;
        const price=tempProduct.price;
        this.subTotal(price);
        tempProducts[index]=tempProduct;
        const newCart=this.state.cart.filter(item=>item.id!==id);
        this.setState(()=>{
            return {products:tempProducts,cart:newCart}
        })
    }

    clearCart = () =>{
        this.state.products.forEach(product=>{
            product.inCart=false;
            product.count=0;
            product.total=0;
        })
        this.setState(()=>{
            return {cart:[],
                cartSubTotal:0,
                cartTax:0,
                cartTotalPrice:0
            }
        })
    }

    addTotal= (st) =>{
        let tempCartSubTotal=this.state.cartSubTotal;
        let tempCartTax=this.state.cartTax;
        let tempCartTotalPrice=this.state.cartTotalPrice;
        tempCartSubTotal+=st;
        tempCartTax+=st*0.05;
        tempCartTax=Number(tempCartTax.toFixed(2))
        tempCartTotalPrice=(tempCartSubTotal+tempCartTax);
        this.setState(()=>{return {cartSubTotal:tempCartSubTotal,cartTax:tempCartTax,cartTotalPrice:tempCartTotalPrice}})

    }
    subTotal= (st) =>{
        let tempCartSubTotal=this.state.cartSubTotal;
        let tempCartTax=this.state.cartTax;
        let tempCartTotalPrice=this.state.cartTotalPrice;
        tempCartSubTotal-=st;
        tempCartTax-=st*0.05;
        tempCartTax=Number(tempCartTax.toFixed(2))
        tempCartTotalPrice=(tempCartSubTotal+tempCartTax);
        this.setState(()=>{return {cartSubTotal:tempCartSubTotal,cartTax:tempCartTax,cartTotalPrice:tempCartTotalPrice}})

    }

    addToCart= (id) =>{
        const index=this.state.products.indexOf(this.getItem(id));
        const tempProducts=this.state.products;
        const tempProduct=tempProducts[index];
        tempProduct.inCart=true;
        tempProduct.count=1;
        const price=tempProduct.price;
        tempProduct.total=price;
        this.addTotal(price)
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