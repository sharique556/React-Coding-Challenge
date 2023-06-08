import React,{useState,useEffect} from 'react'

const Cart = ({state,dispatch}) => {
  const {cart} = state
  const [total,setTotal] = useState(0) 

  const changeQty = (id,qty) =>{
    dispatch({
        type:"CHANGE_CART_QTY",
        payload:{
            id,
            qty
        }
    })
  }

  useEffect(()=>{
    let subTotal = cart.reduce((acc,curVal)=>{
        acc = acc + curVal.price*curVal.qty
        return acc
    },0)
    setTotal(subTotal)
  },[cart])

  return (
    <>
    <div>
    <h1>Your Cart</h1>
    <div style={{display:"flex",justifyContent:"center"}}><b>Subtotal $ {total}</b></div>
    {cart.length > 0 ? 
       cart.map((elem,index)=>{
        return (<div key={index} style={{display:"flex",border:"1px solid black",marginLeft:"1px"}}>
            <div style={{display:"inline-block",margin:"10px"}}>{elem.title}</div>
            <div style={{display:"inline-block"}}>$ {elem.price}</div>
            <div>
                <button onClick={() => changeQty(elem.id,elem.qty-1)}>-</button> 
                <span>{elem.qty}</span>
                <button  onClick={() => changeQty(elem.id,elem.qty+1)}>+</button>
            </div>
        </div>)
       })
    : <span>Cart is empty</span>}
    </div>
    </>
  )
}

export default Cart