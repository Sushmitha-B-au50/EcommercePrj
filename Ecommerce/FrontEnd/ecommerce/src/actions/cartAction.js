
import * as types from "./actionType";



const addCart = (product) =>(
    {
        type:types.ADD_ITEM,
        payload:product,
    });


const deleteCart = (id) =>(
    {
        type:types.DELETE_ITEM,
        payload:id,
    });
    
const decreaseQty = (product) =>(
    {
        type:types.DECREASE_QTY,
        payload:product,
    });

// export const addItemToCart=(prd) => async dispatch =>
// {
//     debugger;
//      try{
//         dispatch(addCart(prd));
//         console.log('dispactched')
       
//      }
//     catch(err){
//                 return err;
//              }
// }

export const addItemToCart = (prd) => async dispatch =>{
        try{
            debugger;
            dispatch(addCart(prd));
            console.log('dispactched')
           
         }
        catch(err){
                    return err;
                 }
    }

export const removeItemToCart = (id) => async dispatch =>{
    try{
        debugger;
        dispatch(deleteCart(id));      
        }
    catch(err){
                return err;
                }
}
  
export const decreaseCartQty = (prd) => async dispatch =>{
    try{
        debugger;
        dispatch(decreaseQty(prd));      
        }
    catch(err){
                return err;
                }
}
  



// export const getProduct=(id) => async dispatch =>
// {
//     debugger;
//    //alert(prd.ProductID);
//      try{
//         const response = await API.get(`/products/${id}`);
//         dispatch(getsingleProduct(response.data));
//         console.log(response.data);
//         return response.data;
//      }
//     catch(err){
//                 return err;
//              }
// }


// export const deleteProduct=(id) => async dispatch =>
// {
//     debugger;
//    //alert(prd.ProductID);
//      try{
//         const response = await API.delete(`/products/${id}`);
//         dispatch(DeleteProduct());
//         //dispatch(loadProducts());
//         return response;
//      }
//     catch(err){
//                 return err;
//              }
// }

