import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts:(state, action) => {
            return action.payload
        },
        filterAsc:(state, action) => {
            state.push(action.payload)
        }
    }
})

export const { setProducts, filterAsc } = productsSlice.actions;

export const getProducts = () => (dispatch) => {
    return axios.get('https://8933-181-233-90-124.ngrok.io/list')
            .then(res => dispatch(setProducts(res.data.data)))
};

export default productsSlice.reducer;
