import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ['clients'],
// };

const store = configureStore({
  reducer: rootReducer,
});

export { store };

// console.log(rootReducer);

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistor = persistStore(store);
// export { store, persistor };
