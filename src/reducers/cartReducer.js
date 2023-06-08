export const cartReducer = (state,actions) => {
    switch(actions.type){
        case 'ADD_PRODUCTS' : {
            return {
                ...state,
                products : actions.payload
            }
        }
        case 'ADD_TO_CART' : {
            return{
                ...state,
                cart : [{
                    ...actions.payload
                },
            ...state.cart]
            }
        }
        case 'REMOVE_FROM_CART' : {
            return {
                ...state,
                cart : state.cart.filter((c)=>c.id!==actions.payload.id)
            }
        }
        case 'CHANGE_CART_QTY' : {
            return {
                ...state,
                cart : state.cart.filter((c)=>
                c.id === actions.payload.id ? (c.qty = actions.payload.qty) : c.qty
                )
            }
        }
        default : {
            return state
        }
    }
}