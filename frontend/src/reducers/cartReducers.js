import { CART_ADD_ITEM , CART_REMOVE_ITEM } from '../constants/cartReducers.js'

export const cartReducer = (state = {cartItems:[]} , action) => {
    switch(action.type){
        case CART_ADD_ITEM :
        const item = action.payload
        const existItem = state.cartItems.find(x => x.product === item.product)
        
    }
}