import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { cartReducer as reducerFn } from './reducers/cartReducer'
import Products from './components/Products'
import Cart from './components/Cart'

const initialState = {
  products: [],
  cart: []
}

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState)
  const fetchProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products')
    // console.log(data)

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  console.log("state contains", state);
  return (
    <>
      <div style={{display:"flex",maxWidth:"fullWidth"}}>
        <div style={{display:"inline-block",maxWidth:"70%"}}>
          <Products state={state} dispatch={dispatch}/>
        </div>
        <div  style={{display:"inline-block",maxWidth:"30%"}}>
          <Cart state={state} dispatch={dispatch}/>
        </div>
      </div>
    </>
  )
}

export default App
