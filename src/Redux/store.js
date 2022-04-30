import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gifApi } from "./gifApi";

export const store = configureStore({
  reducer: {
    [gifApi.reducerPath]: gifApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(gifApi.middleware)
})

setupListeners(store.dispatch)
