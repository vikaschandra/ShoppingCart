import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CreatSlice';

 const store = configureStore({
    reducer: {
        cart: CartSlice,
    },
});
export default store