import { createSelector } from "reselect"

const selectCart = state => state.cart 

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((prev, current) => prev + current.quantity, 0)
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((prev, current) => prev + current.quantity * current.price, 0)
)