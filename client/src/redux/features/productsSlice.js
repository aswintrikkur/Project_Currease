import { createSlice } from '@reduxjs/toolkit'

const fetchProductsList = async () => {

}

const INITIAL_STATE = {
    productList: [],
    cartList:[]
}

const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: (state, action) => {
            // console.log('state===', state);
            // console.log('action===', action.payload);
            state.productList = action.payload;

        },
        addToCart: (state,action) => {
            state.cartList.push(action.payload)
            // console.log(action.payload);
            // console.log('products added to cart')
        }
    },

});

export const { getProducts, addToCart } = productsSlice.actions;

export const productReducer = productsSlice.reducer; 