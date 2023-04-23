
import Card from './card';
import React, {  useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {loadProducts} from '../actions/productActions';


export default function ACListing() {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.prdRed);
    useEffect(() =>
    {
      dispatch(loadProducts());
    
    },[]);

   debugger;
   const   currentPrds = products.filter((prd => prd.Category==='AC'));
    return (
        <div style={{display:'flex',marginTop: '100px'}}>
        
            {currentPrds && currentPrds.map((product,index) => (
           <Card product={product}  key={product.ProductID}/>
            ))}
        </div>
    )
};