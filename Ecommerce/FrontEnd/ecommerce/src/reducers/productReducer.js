<<<<<<< HEAD
import * as types from "../actions/actionType"

const initialState = {
    products:[],
    product:[],
    loading:true,
    error:null,
}

export const  prdReducer = (state = initialState,action) =>
{
    switch (action.type) {
      case types.GET_PRD:
        return{
            ...state,
            loading:false,
            products:action.payload,
        }
        // case types.GET_SINGLE_PRD:
        //     return{
        //         ...state,
        //         loading:false,
        //         product:action.payload,
        //     }

        case types.PRD_ADD:
            return{
                ...state,
                loading:false,
                product:action.payload,
            }
        case types.PRD_Delete:
            return{
                ...state,
                loading:false,
                product:action.payload,
            }
        default:
            return state;
    }     

}
=======
import * as types from "../actions/actionType"

const initialState = {
    products:[],
    product:[],
    loading:true,
    error:null,
}

export const  prdReducer = (state = initialState,action) =>
{
    switch (action.type) {
      case types.GET_PRD:
        return{
            ...state,
            loading:false,
            products:action.payload,
        }
        // case types.GET_SINGLE_PRD:
        //     return{
        //         ...state,
        //         loading:false,
        //         product:action.payload,
        //     }

        case types.PRD_ADD:
            return{
                ...state,
                loading:false,
                product:action.payload,
            }
        case types.PRD_Delete:
            return{
                ...state,
                loading:false,
                product:action.payload,
            }
        default:
            return state;
    }     

}
>>>>>>> d3ac1ef125df9d6cb008ac66d4c192a5688a26a4
