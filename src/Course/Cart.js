import  React from 'react';
function Cart(props){
    addcart=event=>{
        console.log("in cart component")
    }
    addcart(props)
    {
        props.addcart()
    }
    return <p>in cart component</p>

}
export default Cart;