import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import categoryReducer from "./category/categoryReducer";
import shopReducer from "./shop/shopReducer";



const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    category: categoryReducer,
    shop: shopReducer,
    

})
export default rootReducer
// import { combineReducers } from "redux";
// import cartReducer from "./cart/cartReducer";
// import userReducer from "./user/userReducer";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import categoryReducer from "./category/categoryReducer";
// import shopReducer from "./shop/shopReducer";


// const persistConfig = {
//     key: 'root',
//     storage,
//     whiteList: ['cart'] //fix later maybe work
// }
// const rootReducer = combineReducers({
//     user: userReducer,
//     cart: cartReducer,
//     category: categoryReducer,
//     shop: shopReducer,
    

// })
// export default persistReducer(persistConfig, rootReducer)