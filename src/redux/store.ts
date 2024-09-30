import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import cartReducer from "./features/cartSlice";
import authReducer from "./features/authSlice";
const store = configureStore({
  reducer: {
    auth:authReducer,
    cart: cartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
