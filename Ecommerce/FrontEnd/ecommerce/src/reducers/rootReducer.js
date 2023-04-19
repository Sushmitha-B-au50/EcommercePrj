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