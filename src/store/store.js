import {createSlice, configureStore} from '@reduxjs/toolkit';

const cart = createSlice({
    name: 'cart',
    initialState: {cart: [], totalItems: 0, totalPrice: 0},
    reducers: {
        addToCart(state, action){
            const foundedItemIndex = state.cart.findIndex(item => item.name === action.payload.name);

            if(foundedItemIndex === -1){
                state.cart = [{...action.payload, amount: 1}, ...state.cart];
            } else {
                state.cart[foundedItemIndex].amount++;
                state.cart[foundedItemIndex].price += action.payload.price;
            }

            state.totalPrice += action.payload.price;
            state.totalItems++;
        },
        deleteFromCart(state, action){
            const removeItem = action.payload
            const foundItemIndex = state.cart.findIndex(item => item.name === removeItem.name);

            if(state.cart[foundItemIndex].amount === 1){
                state.cart = state.cart.filter(item => item.name !== removeItem.name);
            } else {
                state.cart[foundItemIndex].amount--;
                state.cart[foundItemIndex].price -= removeItem.price;
            }
        }
    }
});

// const UI = createSlice({
//     name: 'ui',
//     initialState: {openModal: false},
//     reducers: {
//         toggleModal(state, action){
//             state.openModal = !state.openModal
//         }
//     }
// })

const store = configureStore({
    reducer: {cart: cart.reducer}
});

export const cartActions = cart.actions;
// export const uiActions = UI.actions;

export default store;