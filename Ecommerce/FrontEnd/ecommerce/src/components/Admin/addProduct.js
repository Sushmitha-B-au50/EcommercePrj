import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState,useRef} from "react";
import { useNavigate } from 'react-router-dom';
import { showInfoToastMessage,showToastMessage } from '../toastMessages';
import { useDispatch,useSelector } from 'react-redux';
import {addproduct} from '../../actions/productActions';




function AddProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formRef = useRef();
  

    const[product,setProduct] = useState({
        ProductID: "",
        ProductName:"",
        ProductDetails:"",
        Ratings:"",
        Quantity:"",
        Price:"",
        Category:"",
        ProductImage:""
    });
 
   
     
    //fetch(product.ProductImage);
   
    
    const {ProductID,ProductName,ProductDetails,Ratings,Quantity,Price,Category,ProductImage} = JSON.stringify(product);
    const handleChange = (e) =>
    {
        let name = e.target.name;
        let value = e.target.value;
        debugger;
       
                   
        
        if(name ==="ProductImage")
        {
            debugger;
            var path = e.target.value.replace('C:\\fakepath\\','C:\\EC-Images\\');
            value = path;
             //URL.createObjectURL(e.target.files[0])
        }
    //            let files = e.target.files;
    // let reader = new FileReader();
    // reader.readAsDataURL(files[0]);
    // reader.onload = (e) => {
    //   console.log('image data: ', e.target.result);
    // };
        
        setProduct({...product,[name]:value})
      
     
    }
      
            //   const upload_file = e.target.file.files;
            //   value = upload_file;
            //   alert(value);
        
    
    
    const resAddProduct = async ()=> {
       debugger;
       
        try{
            let res =  await dispatch(addproduct(product ))
            debugger;
           
                if(res.status ===200)
                {
                    debugger;
                        navigate("/adminProductList")
                    showToastMessage(res.data.message);
                }
                else{
                    //alert(res.response.data.message);
                    showInfoToastMessage(res.response.data.message);
                }
            }
            catch(err)
            {
                //alert(err.data.message);
                showInfoToastMessage(err.message); 
            }
        }
    
    return (
        <div className="adminAddPrd">
            <Button  size="sm" onClick={() =>  navigate('/adminProductList')}>
              Go Back
            </Button>
            <Card  className="addprd text-center col-md-6 shadow mx-auto">
                <Card.Title className= "display-4 text-white"> Add Product</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextID">
                            <Form.Label column sm="5">
                                Product ID
                            </Form.Label>
                            <Col  sm="7">
                                <Form.Control type="number" placeholder="ProductID" name="ProductID" value={ProductID} onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="5">
                                Product Name
                            </Form.Label>
                            <Col  sm="7">
                                <Form.Control type="text" placeholder="ProductName" name="ProductName" value={ProductName} onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextDetails">
                            <Form.Label column sm="5">
                                Product Details
                            </Form.Label>
                            <Col  sm="7">
                                <Form.Control type="text" placeholder="ProductDetails" name="ProductDetails" value={ProductDetails} onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextRatings">
                            <Form.Label column sm="5">
                                Ratings
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="number" placeholder="Ratings" name="Ratings" value={Ratings} onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextQunatity">
                            <Form.Label column sm="5">
                                Quantity
                            </Form.Label>
                            <Col  sm="7">
                                <Form.Control type="number" placeholder="Quantity" name="Quantity" value={Quantity} onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                            <Form.Label column sm="5">
                                Price
                            </Form.Label>
                            <Col  sm="7">
                                <Form.Control type="number" placeholder="Price" name="Price" value={Price} onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextCategory">
                            <Form.Label column sm="5">
                                Category
                            </Form.Label>
                            <Col  sm="7">
                                <Form.Control type="text" placeholder="Category" name="Category" value={Category} onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formFile" className="mb-3">
                            <Form.Label column sm="5">
                                Product Image
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control type="file" name="ProductImage" value={ProductImage} onChange={handleChange}  />
                            </Col>
                        </Form.Group>
                        <Button as="input"  type="button" onClick={resAddProduct} value="Submit" />
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AddProduct;