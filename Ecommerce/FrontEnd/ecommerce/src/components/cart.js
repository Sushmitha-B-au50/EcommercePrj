import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import React, {  useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from 'react-bootstrap/Image';
import {addItemToCart,removeItemToCart,decreaseCartQty} from '../actions/cartAction';

export default function Cart() {
    // debugger;
  // const navigate = useNavigate();
   const dispatch = useDispatch();
  const [Price,setPrice] = useState(0);
  const cartItems = useSelector((state) => state.cartRed.cart);
  const navigate = useNavigate();
  //const {products} = useSelector((state) => state.prdRed);
  // useEffect(() =>
  // {
   
  //    console.log(cartItems[2].qty);
  //   setItems(items);

  // },useSelector((state) => state.cartRed.cart));


  debugger;
  const handleAddProduct = (product) =>
  {
    dispatch(addItemToCart(product))
    navigate('/Cart');
  
    // const productExist = cartItems.find((item) => item.ProductID === product.ProductID)
    //   if(productExist)
    //   {
    //     debugger
    //     // setQty(Qty+1);
       
    //      cartItems.map((item) =>
    //      item.ProductID === product.ProductID ?{Qty:Qty} : item)
    //   }
    //   else{
    //    product.add({'qty' :1})
    //   }
  }
  const removeProduct =(id) =>
  {
  dispatch(removeItemToCart(id));
  }
  const reduceCartQty=(prd) =>
  {
    debugger;
    dispatch(decreaseCartQty(prd));
  }


   const total=() =>
  {
   
    let p = 0;
    if(cartItems[0] !== null)
    {
     cartItems.map((ele,k) =>
     {
       p = (Number(Object.values(ele.Price)) + p)  * (ele.qty);
     })
     debugger;
     setPrice(p);
     console.log(p);  
     debugger;
    }
  }
 useEffect(() =>
  {
    total();
    debugger;
  },[total])

  console.log(cartItems);
 
   return (
    <>
  { cartItems[0] ?
    cartItems.map((product,index) => {
      return (
      
        <>        
          <div className="cartcontainer">
           

          <div>
            <Table  className="cart text-white" striped size="sm">
          <thead>
          <tr>
          <th>Product Image</th>
           <th>Product Name</th>         
          <th>Price</th>
          <th></th>
          <th></th>
          <th></th>
          </tr>
      </thead>
        <tbody  id="tbl">        
          <tr key={index}>
           <Image  scope="row" src={product.ProductImage} alt={product.ProductImage}  height={200} width={200}/>
             
              <td>{product.ProductName}</td>
            
              <td>{Object.values(product.Price)}</td>
            
              <td><Button className="ms-5" onClick={() =>handleAddProduct(product)}> +</Button>
              <p className="mt-2 ms-5 text-center"> {product.qty}</p>
              <Button className="ms-5" onClick={()=>reduceCartQty(product)}> -</Button>
              </td>
              <td></td>
              <td> 
                <Button className="ms-2">
                       <FontAwesomeIcon icon={faTrash}  onClick={()=>removeProduct(product.ProductID)}  />  
                </Button>
              </td>          
            </tr>
              </tbody>
               <p className="totalprice">Total Price:{Price} </p>
               <Button as="input" type="button"  style={{marginLeft:"280px",backgroundColor:'#144d79', borderColor:'#084a75' }} onClick={() =>navigate('/Order')} value="Place Order" />
            </Table>           
          </div>  
          </div>  
          </>    
      )}) :  <h2 className="text-center" style={{background:"white" ,marginTop:"250px"}}>Cart is Empty </h2>}
</>
   )
      }
 
//   return (
//            <>
//           <h2>cartt</h2>
        
//             <div>
//             {cartItems && cartItems.map((product,index) => {
//           <Card style={{ width: '18rem', margin: '20px', color: '#319ce4', objectfit: "cover" }} >
//              <Card.Img variant="top" src={product.ProductImage} />
//              <Card.Body style={{ maxHeigh: '10em', overflowY: 'scroll' }}>
//                 <Card.Title>{product.ProductName}</Card.Title>
//                 <Card.Text style={{ color: 'black', fontWeight: 'bold' }}>
//                    {product.ProductDetails}
//                 </Card.Text>
//              </Card.Body>
//              <ListGroup className="list-group-flush" key={product.ProductID}>
//                 <ListGroup.Item>Price: {Object.values(product.Price)}</ListGroup.Item>
//                 <ListGroup.Item>Rating: {product.Ratings}</ListGroup.Item>
//                 <ListGroup.Item>Available Qty: {product.Quantity}</ListGroup.Item>
//              </ListGroup>
//              <Card.Body>
//                 <Button className='btn btn-success ms-5 me-0'>
//                  +
//                 </Button>
//              </Card.Body>
//           </Card>
//             })}
//        </div>
 
             
//       </>
  
//   )





//   debugger;
// useEffect(() =>
// {
 

// },[products]);

// const handleDelete =(id) =>
// {
//   dispatch(deleteProduct(id))
//   navigate("/adminProductList")
  
// }

     
    //       <>
    //       <h2>cartt</h2>
    //       <div className="adminHome">
    //         <Table  className="adminPrdList text-white" striped size="sm" >
    //       <thead>
    //       <tr>
    //       <th>Product Image</th>
    //        <th>Product ID</th>
    //        <th>Product Name</th>
    //       <th>Product Details</th>
    //       <th>Ratings</th>
    //        <th>Quantity</th>
    //       <th>Price</th>
    //      <th>Category</th>
    //      <th>Actions</th>
      
    //       </tr>
    //   </thead>
    //           <tbody  id="tbl">
    //           {cartItems && cartItems.map((product,index) => {
               
    //     return (
                 
    //       <tr key={index}>
    //        <Image  scope="row" src={product.ProductImage} alt={product.ProductImage}  height={200} width={200}/>
    //           <td>{product.ProductID}</td>
    //           <td>{product.ProductName}</td>
    //           <td>{product.ProductDetails}</td>
    //           <td>{product.Ratings}</td>
    //           <td>{product.Quantity}</td>
    //           <td>{Object.values(product.Price)}</td>
    //           <td>{product.Category}</td>
    //           <td><button className="me-3"> <FontAwesomeIcon icon={faPenToSquare} onClick={() => navigate(`/EditProduct/${product.ProductID}`)} /></button>
    //           <button>
    //                    <FontAwesomeIcon icon={faTrash}    />  
    //                    {/* onClick={() => {
    //                         if (window.confirm("Are you sure to delete?")) {
    //                           Delete(data.employee_Id);
    //                         }
    //                         FaEdit
    //                       }}   */}
    //         </button>
    //           </td>
    //         </tr>
    //   )})}
    //           </tbody>
    //         </Table>
    //       </div>
    //   </>
//     return(
//     <> 
//     {cartItems && cartItems.map((product,index) => {
              
//               <Card style={{ width: '18rem', margin: '20px', color: '#319ce4', objectfit: "cover" }} >
//               <Card.Img variant="top" src={product.ProductImage} />
//               <Card.Body style={{ maxHeigh: '10em', overflowY: 'scroll' }}>
//                  <Card.Title>{product.ProductName}</Card.Title>
//                  <Card.Text style={{ color: 'black', fontWeight: 'bold' }}>
//                     {product.ProductDetails}
//                  </Card.Text>
//               </Card.Body>
//            </Card>

      
//     })
    
// }

  
 



