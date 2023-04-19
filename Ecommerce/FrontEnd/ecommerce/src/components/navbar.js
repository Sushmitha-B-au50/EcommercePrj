import React, { useState,useEffect } from 'react';
import { HiMenu } from "react-icons/hi";
import {FaShoppingCart} from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/logo.PNG';
import { useSelector } from 'react-redux';
import '../App.css';
import {logout} from '../actions/userActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Navigation() {
  const [show, setShow] = useState(false);
  const [adminUser, setadminUser] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {user} = useSelector((state) => state.userRed);
 
const isAdmin=() =>
{
  if(user)
     if(user ==="admin")
        setadminUser(true);
     else
      setadminUser(false);
}

useEffect(()=>
{
  isAdmin();

},[user])


  const navigate = useNavigate();
  const dispatch = useDispatch();
 const Logout = () =>
 {
  debugger;
     dispatch(logout());
      navigate("/");
   
  //dispatch(logout());
 }
 
  return (
    <>
      <Navbar className="navbar-custom text-white" collapseOnSelect expand="lg" fixed="top">
        <Container>
          <Image src={Logo} height={60} width={75} className="m-3"/>
          <Navbar.Brand  className="me-auto display-1"> <h3>SHOPNOW  Ecommerce  Store</h3></Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              </Nav>
            {user ? (
              <>
              <Link className="link" onClick={Logout}>Logout</Link>
              <div className="text-uppercase m-2" id="loginName">{user}</div></>
            ):   (<><Link className="link"  to="/login">Login</Link>
            <div className="text-uppercase m-2" id="loginName"></div></>)}
            <FaShoppingCart size={35}/>
            <p className="font-weight-bold">0</p>
            <HiMenu className="m-2" size={40} onClick={handleShow} />
            <Offcanvas  style={{backgroundColor:"#3d6a8b"}} className="text-white" show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                  <Image src={Logo} height={80} width={85} className="m-2"/>
                  SHOPNOW
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="items">
                    <Link className="flex-items" to="/">Home</Link>
                    {adminUser ? ( 
                    <Link className="flex-items" to="/adminProductList">Admin Panel</Link>):null}
                    <Link className="flex-items" to="/contact">Contact Us</Link>
                  </div>
                </Offcanvas.Body>
            </Offcanvas>
         </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

