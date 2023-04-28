import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalSum: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const selectedItem = state.items.find(el => el.id === action.payload.id);
            if (typeof (selectedItem) === 'undefined') {
                state.items.push({
                    id: action.payload.id,
                    imgPath: action.payload.imgPath,
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: action.payload.quantity,
                    totalPrice: action.payload.price * action.payload.quantity, 
                })
                state.totalSum += action.payload.price * action.payload.quantity
            } else {
                state.totalSum += selectedItem.price * selectedItem.quantity;
                selectedItem.quantity++;
                selectedItem.totalPrice = selectedItem.price * selectedItem.quantity;
            }
            state.totalQuantity++;
            
        },
        removeItemFromCart: (state, action) => {
            const selectedItem = state.items.find(el => el.id === action.payload.id);
            if (typeof (selectedItem) !== 'undefined' && selectedItem.quantity > 1) {
                selectedItem.quantity--;
                selectedItem.totalPrice = selectedItem.price * selectedItem.quantity;
            } else {
                state.items = state.items.filter(el => el.id !== action.payload.id);
            }
            state.totalSum -= selectedItem.price * selectedItem.quantity;
            state.totalQuantity--;
        }
    }
});

export const cartActions = cartSlice.actions;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export const selectTotalSum = (state) => state.cart.totalSum;
export const selectItems = (state) => state.cart.items;
export default cartSlice;