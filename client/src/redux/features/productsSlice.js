import { createSlice } from '@reduxjs/toolkit'

const fetchProductsList = async () => {

}

const INITIAL_STATE = {
    productList: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: (state, action) => {
            console.log('state===', state);
            console.log('action===', action.payload);
            state.productList = action.payload;

        },
        cartProducts: () => {
            console.log('products added to cart')
        }
    },

});

export const { getProducts, cartProducts } = productsSlice.actions;

export const productReducer = productsSlice.reducer; 