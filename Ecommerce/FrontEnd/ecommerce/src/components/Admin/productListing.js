import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import React, {  useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {loadProducts,deleteProduct} from '../../actions/productActions';
import Image from 'react-bootstrap/Image';

function AdminProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.prdRed);
  
useEffect(() =>
{
  debugger;
  dispatch(loadProducts());

},[products]);

const handleDelete =(id) =>
{
  dispatch(deleteProduct(id))
  navigate("/adminProductList")
  
}

  // return (
  //   <div className="adminHome">
  //       <Button className="userbtn"  variant="secondary" size="sm" onClick={() =>  navigate('/AddProduct')}> Add Product </Button>
  //    <Table  className="adminPrdList text-white" striped bordered hover size="sm">
  //     <thead>
  //       <tr>
  //         <th>Product Image</th>
  //         <th>Product ID</th>
  //         <th>Product Name</th>
  //         <th>Product Details</th>
  //         <th>Ratings</th>
  //         <th>Quantity</th>
  //         <th>Price</th>
  //         <th>Category</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         <td>1</td>
  //         <td>Mark</td>
  //         <td>Otto</td>
  //         <td>@mdo</td>
  //         <td>llllll</td>
  //         <td>oooooooo</td>
  //         <td>kkkkkkkkkkk</td>
  //         <td>ppppppp</td>
  //       </tr>
  //       <tr>
  //         <td>2</td>
  //         <td>Jacob</td>
  //         <td>Thornton</td>
  //         <td>@fat</td>
  //       </tr>
  //       <tr>
  //         <td>3</td>
  //         <td colSpan={2}>Larry the Bird</td>
  //         <td>@twitter</td>
  //       </tr>
  //     </tbody>
  //   </Table>
  //   </div>
  // );


  
  //Home page

      
  
   
    // useEffect(() => {
    //   LoadData();
    // }, []);
    // useEffect(() => {
    //   LoadData();
    // }, [APIData]); // after delete
  
  
      return(
          <>
          <div className="adminHome">
            <Button className="userbtn"  size="sm" onClick={() =>  navigate('/AddProduct')}> Add Product </Button>
            <Table  className="adminPrdList text-white" striped size="sm" >
          <thead>
          <tr>
          <th>Product Image</th>
           <th>Product ID</th>
           <th>Product Name</th>
          <th>Product Details</th>
          <th>Ratings</th>
           <th>Quantity</th>
          <th>Price</th>
         <th>Category</th>
         <th>Actions</th>
            {/* <th scope="col">Employee ID</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
            <th scope="col">Actions</th> */}
          </tr>
      </thead>
              <tbody  id="tbl">
              {products && products.map((product,index) => {
               
        return (
                 
          <tr key={index}>
           <Image  scope="row" src={product.ProductImage} alt={product.ProductImage}  height={200} width={200}/>
              <td>{product.ProductID}</td>
              <td>{product.ProductName}</td>
              <td>{product.ProductDetails}</td>
              <td>{product.Ratings}</td>
              <td>{product.Quantity}</td>
              <td>{Object.values(product.Price)}</td>
              <td>{product.Category}</td>
              <td><button className="me-3"> <FontAwesomeIcon icon={faPenToSquare} onClick={() => navigate(`/EditProduct/${product.ProductID}`)} /></button>
              <button>
                       <FontAwesomeIcon icon={faTrash}  onClick={() =>handleDelete(product.ProductID)}  />  
                       {/* onClick={() => {
                            if (window.confirm("Are you sure to delete?")) {
                              Delete(data.employee_Id);
                            }
                            FaEdit
                          }}   */}
            </button>
              </td>
            </tr>
      )})}
              </tbody>
            </Table>
          </div>
      </>
      )
  
  }
 



export default AdminProductList;