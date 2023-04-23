// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/esm/Button';
import Card from './card';
import React, {  useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {loadProducts} from '../actions/productActions';


export default function WCListing() {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.prdRed);
    useEffect(() =>
    {
      dispatch(loadProducts());
    
    },[]);


   const   currentPrds = products.filter((prd => prd.Category==='WC'));
   //const   currentPrds = products;
    return (
           
        <div style={{display:'flex',marginTop: '100px'}}>
        
            {currentPrds && currentPrds.map((product,index) => (
           <Card product={product} key={product.ProductID}/>
            // <Card style={{  width: '18rem'  ,margin: '20px',color:'#319ce4',  objectfit: "cover"  }}>
            //     <Card.Img variant="top" src={product.ProductImage} />
            //     <Card.Body style={{maxHeigh: '10em', overflowY: 'scroll'}}>
            //         <Card.Title key={product.ProductID}>{product.ProductName}</Card.Title>
            //         <Card.Text style={{color:'black', fontWeight: 'bold'}}>
            //             {product.ProductDetails}
            //         </Card.Text>
            //     </Card.Body>
            //     <ListGroup className="list-group-flush">
            //         <ListGroup.Item>Price: {Object.values(product.Price)}</ListGroup.Item>
            //         <ListGroup.Item>Rating: {product.Ratings}</ListGroup.Item>
            //         <ListGroup.Item>Available Qty: {product.Quantity}</ListGroup.Item>
            //     </ListGroup>
            //     <Card.Body>
            //         <Button className='btn btn-success ms-5 me-0'>
            //          Add to cart
            //         </Button>
            //     </Card.Body>
            // </Card>
            ))}
        </div>
      
   
    )
};