// import {createStore} from "redux";
// import rootReducer from "../reducers"


// const store = createStore(rootReducer);

// export default store;

/*2*/

// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../reducers";
// import thunk from "redux-thunk";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//   let store = createStore(persistedReducer, applyMiddleware(thunk));
//   let persistor = persistStore(store);
//   return { store, persistor };
// };


/*3 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

 const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;