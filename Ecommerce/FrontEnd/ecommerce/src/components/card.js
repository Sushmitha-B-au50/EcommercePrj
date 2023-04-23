import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import {addItemToCart} from '../actions/cartAction';
import { useDispatch,useSelector } from 'react-redux';

export default function CardComponent(props) {
   const dispatch = useDispatch();
   // const cartItems = useSelector((state) => state.cartRed.cart);


const addToCart = (product) =>
{
   debugger;
   console.log(product);
   dispatch(addItemToCart(product))
}
   // const productExist = cartItems.find((item) => item.ProductID === product.ProductID)
   // if(productExist)
   // {
   //   cartItems.map((item) =>
   //   item.ProductID === product.ProductID ?{...productExist,Quantity:productExist.Quantity+1} : item)
   //   alert()
   // }
   // else{
   //    dispatch(addItemToCart(product,1))
   // }
  


   return (
      <div>
         <Card style={{ width: '18rem', margin: '20px', color: '#319ce4', objectfit: "cover" }} >
            <Card.Img variant="top" src={props.product.ProductImage} />
            <Card.Body style={{ maxHeigh: '10em', overflowY: 'scroll' }}>
               <Card.Title>{props.product.ProductName}</Card.Title>
               <Card.Text style={{ color: 'black', fontWeight: 'bold' }}>
                  {props.product.ProductDetails}
               </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" key={props.product.ProductID}>
               <ListGroup.Item>Price: {Object.values(props.product.Price)}</ListGroup.Item>
               <ListGroup.Item>Rating: {props.product.Ratings}</ListGroup.Item>
               <ListGroup.Item>Available Qty: {props.product.Quantity}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
               <Button className='btn btn-success ms-5 me-0' onClick={() =>addToCart(props.product)}>
                  Add to cart 
               </Button>
            </Card.Body>
         </Card>
      </div>
   )
}