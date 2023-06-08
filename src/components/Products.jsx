import React from 'react'

const Products = ({ state, dispatch }) => {
  console.log("products state", state);
  return (<>
    <h1>Products</h1>
    {state.products.map((elem, index) => {
      return (<>
        <div key={index} style={{border:"2px solid black",maxWidth:"fitContent"}}>
          <img src={elem.thumbnail} alt={elem.title} />
          <span>{elem.title}</span>
          <span>$ {elem.price}</span>
          {state.cart.some(p => p.id == elem.id) ? 
           <button 
           style={{backgroundColor:"green",color:"white"}}
           onClick={()=>dispatch({
            type:"REMOVE_FROM_CART",
            payload:elem
           })}
           >Remove from cart</button> : 
           <button 
           style={{backgroundColor:"green",color:"white"}}
           onClick={()=>dispatch({
            type:"ADD_TO_CART",
            payload:{
              id : elem.id,
              title : elem.title,
              thumbnail : elem.thumbnail,
              qty : 1,
              price : elem.price
            }
           })}
           >Add to cart</button>
          }
        </div >
      </>
      )
    })}
  </>
  )
}

export default Products