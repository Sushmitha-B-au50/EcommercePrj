<<<<<<< HEAD
import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {prdReducer} from "../reducers/productReducer";
import {userReducer} from "../reducers/userReducer";
import {cartReducer} from "../reducers/cartReducer";


const persistConfig = {
    key:"root",
    storage,
    whiteList:["userRed","prdRed","cartRed"]
}

const rootReducer = combineReducers({
    prdRed: prdReducer,
    userRed: userReducer,
    cartRed:cartReducer
   
   
  });

export default persistReducer(persistConfig,rootReducer);
=======
import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {prdReducer} from "../reducers/productReducer";
import {userReducer} from "../reducers/userReducer";


const persistConfig = {
    key:"root",
    storage,
    whiteList:["userRed","prdRed"]
}

const rootReducer = combineReducers({
    prdRed: prdReducer,
    userRed: userReducer,
   
  });

  export default persistReducer(persistConfig,rootReducer);
>>>>>>> d3ac1ef125df9d6cb008ac66d4c192a5688a26a4
