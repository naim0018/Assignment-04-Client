import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string,
  title: string,
  price: number,
  stock: number,
  img: string,
  rating:number,
  quantity:number,
};

type CartState = {
  carts: CartItem[],
  totalAmount: number,
};

const initialState: CartState = {
  carts: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      console.log(newItem)
      const existingItem = state.carts.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.carts.push(newItem);
      }

      state.totalAmount += parseFloat((newItem.price * newItem.quantity).toFixed(2));
      console.log(state.totalAmount)
      
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.carts.find((item) => item.id === id);

      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.carts = state.carts.filter((item) => item.id !== id);
      }
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const existingItem = state.carts.find((item) => item.id === id);

      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalAmount += existingItem.price * quantity;
      }
    },
    clearCart(state) {
      state.carts = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
