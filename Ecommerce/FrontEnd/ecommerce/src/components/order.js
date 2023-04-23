import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { showInfoToastMessage, showToastMessage } from '../toastMessages';
import { useDispatch } from 'react-redux';
// import { addproduct } from '../../actions/productActions';




function AddProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [order, setOrder] = useState({
        Name: "",
        Email: "",
        Address: "",
        PhoneNumber: "",
        TotalQunatity: "",
        TotalPrice: "",
    });

const [product,setProduct]= useState([{}]);

 
    const { Name, Email, Address, PhoneNumber, TotalQunatity, TotalPrice } = JSON.stringify(order);
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        debugger;

        setOrder({ ...order, [name]: value })


    }

    const confirmOrder = async () => {
        debugger;

        // try {
        //     let res = await dispatch(addproduct(product))
        //     debugger;

        //     if (res.status === 200) {
        //         debugger;
             
        //         showToastMessage(res.data.message);
        //         navigate("/adminProductList")
        //     }
        //     else {
        //         //alert(res.response.data.message);
        //         showInfoToastMessage(res.response.data.message);
        //     }
        // }
        // catch (err) {
        //     //alert(err.data.message);
        //     showInfoToastMessage(err.message);
        // }
    }

    return (
        <div className="adminAddPrd">
            <Button size="sm" onClick={() => navigate('/Cart')}>
                Go Back
            </Button>
            <Card className="addprd text-center col-md-6 shadow mx-auto">
                <Card.Title className="display-4 text-white">Order Details</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextID">
                            <Form.Label column sm="5">
                               Name
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="number" placeholder="Name" name="Name" value={Name} readOnly="true"  onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="5">
                               Email
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Email" name="Email" value={Email} readOnly="true"  onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextCategory">
                            <Form.Label column sm="5">
                                Address
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Address" name="Address" value={Address} onChange={handleChange} />
                            </Col>
                        </Form.Group>   
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextDetails">
                            <Form.Label column sm="5">
                                Phone Number
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="PhoneNumber" name="Phone Number" value={PhoneNumber} onChange={handleChange} />
                            </Col>
                        </Form.Group>                       
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextQunatity">
                            <Form.Label column sm="5">
                                TotalQuantity
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="number" placeholder="TotalQuantity" name="TotalQuantity" readOnly="true"  value={TotalQunatity} onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                            <Form.Label column sm="5">
                                TotalPrice
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="number" placeholder="TotalPrice" name="TotalPrice" value={TotalPrice} readOnly="true"  onChange={handleChange} />
                            </Col>
                        </Form.Group>                                          
                        <Button as="input" type="button" onClick={() =>confirmOrder} value="Confirm Order" />
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AddProduct;