import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';
import {persistStore} from "redux-persist";
import rootReducer from "../reducers/rootReducer";

const middleWares = [reduxThunk];

export const store = createStore(rootReducer,applyMiddleware(...middleWares));

export const persistor = persistStore(store);
