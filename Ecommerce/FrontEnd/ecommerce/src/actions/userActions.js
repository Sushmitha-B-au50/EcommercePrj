<<<<<<< HEAD
import * as types from "./actionType";
import {API } from "../API";



const loginStart = () =>(
{
    type:types.LOGIN_START,
});

const loginSuccess = (token) =>(
    {
        type:types.LOGIN_SUCCESS,
        payload:token,
    });

const loginFail = (error) =>(
    {
        type:types.LOGIN_FAIL,
        payload:error,
    });

const signupSuccess = (token) =>(
    {
        type:types.SIGNUP_SUCCESS,
        payload:token,
    });

const signupFail = (error) =>(
    {
        type:types.SIGNUP_FAIL,
        payload:error,
    });

 

export const signup=({name,email,password}) => async dispatch =>
{
     try{
        const response = await API.post('/users/signup',{name,email,password});
        dispatch(signupSuccess(response.data));
       
        //alert(response);
        return response;
     }
    catch(err){
            
            dispatch(signupFail(err.data));
        
                //alert(err);
                return err;
             }
            }
        // return async function(dispatch)
        // {
        //       debugger;
        //      await API.post('/users/signup',{name,email,password}).then(res =>{
        //         alert(res.data.message);
        //         dispatch(signupSuccess(res.data));
        //   })
        //   .catch((e) => {
        //    alert(e);
        //    dispatch(signupFail(e.data.message));
        //   })
                
            
            
                // localStorage.SetItem("login", JSON.stringify({
                //     userLogin:true,
                //     token:res.data.access_token
                // }))
  

export const login=({email,password}) => async dispatch =>
{
        dispatch(loginStart());
          try{
            debugger;
               const res = await API.post('/users/login',{email,password})
               
                dispatch(loginSuccess(res.data));               
                // alert(res.data.user);
                // localStorage.setItem("login", JSON.stringify({
                //     userLogin:true,
                //     user:
                //     token:res.data.access_token
                // }))
                return res;
            }
            catch(err)
            {
                dispatch(loginFail(err.data));
                return err;
            }
       
}


export const logout = () =>(
    {
    
        type:types.LOG_OUT,
      
    });
=======
import * as types from "./actionType";
import {API } from "../API";



const loginStart = () =>(
{
    type:types.LOGIN_START,
});

const loginSuccess = (token) =>(
    {
        type:types.LOGIN_SUCCESS,
        payload:token,
    });

const loginFail = (error) =>(
    {
        type:types.LOGIN_FAIL,
        payload:error,
    });

const signupSuccess = (token) =>(
    {
        type:types.SIGNUP_SUCCESS,
        payload:token,
    });

const signupFail = (error) =>(
    {
        type:types.SIGNUP_FAIL,
        payload:error,
    });

 

export const signup=({name,email,password}) => async dispatch =>
{
     try{
        const response = await API.post('/users/signup',{name,email,password});
        dispatch(signupSuccess(response.data));
       
        //alert(response);
        return response;
     }
    catch(err){
            
            dispatch(signupFail(err.data));
        
                //alert(err);
                return err;
             }
            }
        // return async function(dispatch)
        // {
        //       debugger;
        //      await API.post('/users/signup',{name,email,password}).then(res =>{
        //         alert(res.data.message);
        //         dispatch(signupSuccess(res.data));
        //   })
        //   .catch((e) => {
        //    alert(e);
        //    dispatch(signupFail(e.data.message));
        //   })
                
            
            
                // localStorage.SetItem("login", JSON.stringify({
                //     userLogin:true,
                //     token:res.data.access_token
                // }))
  

export const login=({email,password}) => async dispatch =>
{
        dispatch(loginStart());
          try{
               const res = await API.post('/users/login',{email,password})
                dispatch(loginSuccess(res.data.user));
                // alert(res.data.user);
                // localStorage.setItem("login", JSON.stringify({
                //     userLogin:true,
                //     user:
                //     token:res.data.access_token
                // }))
                return res;
            }
            catch(err)
            {
                dispatch(loginFail(err.data));
                return err;
            }
       
}


export const logout = () =>(
    {
    
        type:types.LOG_OUT,
      
    });
>>>>>>> d3ac1ef125df9d6cb008ac66d4c192a5688a26a4
