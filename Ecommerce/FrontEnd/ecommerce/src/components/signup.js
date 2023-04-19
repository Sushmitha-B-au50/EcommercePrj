import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {React,useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {signup} from '../actions/userActions';



export default function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   

    const [name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const showToastMessage = (Message) => {
        toast.error(Message, {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const showInfoToastMessage = (Message) => {
        toast.info(Message, {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const resSignup = async (values)=> {
       
            debugger;
                let res =  await dispatch(signup(values))
                debugger;
                try{
                if(res.status ===200)
                {
                    debugger;
                    showInfoToastMessage(res.data.message);
                    navigate("/login");
                }
                else{
                   // alert(res.response.data.message);
                    showInfoToastMessage(res.response.data.message);
                }
                }
                catch(err)
                {
                    //alert(err.data.message);
                    showInfoToastMessage(err.data.message); 
                }
            }
           

    const handleSubmit = (e) =>
    {
        debugger;
        e.preventDefault();
        if(!name&& !email&&!password)
            showToastMessage ("all fields are Mandatory");
        else if(!name && !password)
               showToastMessage ("name and password are required");
        else if(!email && !password)
            showToastMessage ("email and password are required");
        else if(!email && !name)
           showToastMessage ("email and name are required");
        else if(!name)
            showToastMessage ("name is required");
        else if(!password)
            showToastMessage ("password is required");
        else if(!name)
            showToastMessage ("email is required");
        else{
           debugger;
                   resSignup({name,email,password});
              
    //           dispatch(signup({name,email,password})).then(res =>{
    //         if(res.status ===200)
    //         {
    //             navigate("/");
    //             showInfoToastMessage(res.data.message);
    //         }
    //         else{
    //             showInfoToastMessage(res.response.data.message);
    //         }
    //   })
    //   .catch((e) => {
    //     showInfoToastMessage(e); 
    //   })
    }


         
    }

    // const[state,setState] = useState({
    //     ProductID: "",
    //     ProductName:"",
    //     ProductDetails:"",
    //     Ratings:"",
    //     Quantity:"",
    //     Price:"",
    //     Category:"",
    //     ProductImage:""
    // });
    //const {ProductID,ProductName,ProductDetails,Ratings,Quantity,Price,Category,ProductImage} = state;
    return (
        <div>
             <Container className="signup">
                <Row>
                    <Col> <div  className="information">
                            <p className="fs-3 text-white">Sign Up and Buy Now</p>
                            <p>Get new fashion accessories</p>
                            <p>Summer collection is here!</p>
                            <p>
                                All dresses at offerdable price
                            </p>
                           
                        </div>
                    </Col>
                    <Col> <Card className="signup text-center m-5 w-75 h-80 text-white col-md-6 shadow mx-auto">
                            <Card.Title className="display-6 m-5">Sign up</Card.Title>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label className="font-weight-bold" >Name</Form.Label>
                                        <Form.Control type="text" onChange={(e) => {setName(e.target.value)}}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label  className="font-weight-bold" >Email address</Form.Label>
                                        <Form.Control type="email" onChange={(e) => {setEmail(e.target.value)}}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label  className="font-weight-bold" >Password</Form.Label>
                                        <Form.Control type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                                    </Form.Group>
                                    <div className="m-3 c gap-4">
                                    <Button variant="secondary" size="lg" onClick={handleSubmit} className="font-weight-bold">
                                    Sign Up 
                                    </Button>
                                  <p className="m-5"> Already have an account? <Link to="/login">Log in</Link></p>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card></Col>
                        <ToastContainer />
                </Row>
            </Container>   
        </div>
    );
}

