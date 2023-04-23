import * as types from "./actionType";
import {API } from "../API";


const getProducts = (products) =>(
    {
        type:types.GET_PRD,
        payload:products,
    });


const AddProducts = (Product) =>(
    {
        type:types.Add_PRODUCT

    });
const UpdateProduct = (Product) =>(
    {
        type:types.Add_PRODUCT

    });
const DeleteProduct = () =>(
    {
        type:types.PRD_Delete
    });
    

// export const loadProducts=() => async dispatch =>
// {
//     //debugger;
//         try{
//         const response = await API.get('/products/');
//         //debugger;
//         dispatch(getProducts(response.data));
//         //return response.data;
//         }
//     catch(err){
//                 return err;
//                 }
// }

export const loadProducts = () => {
    return async (dispatch) => {

            debugger;
            const response = await API.get('/products/');
            //debugger;
            dispatch(getProducts(response.data));
          
        
    }
  }

export const addproduct=(prd) => async dispatch =>
{
    debugger;
   //alert(prd.ProductID);
     try{
        const response = await API.post('/products/addPrd',prd);
        dispatch(AddProducts());
        // return response;
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

export const updateProduct=(id,product) => async dispatch =>
{
    debugger;
   //alert(prd.ProductID);
     try{
        const response = await API.put(`/products/${id}`,product);
        dispatch(UpdateProduct());
        //console.log(response.data);
        return response;
     }
    catch(err){
                return err;
             }
}


export const deleteProduct=(id) => async dispatch =>
{
    debugger;
   //alert(prd.ProductID);
     try{
        const response = await API.delete(`/products/${id}`);
        dispatch(DeleteProduct());
        //dispatch(loadProducts());
        return response;
     }
    catch(err){
                return err;
             }
}

