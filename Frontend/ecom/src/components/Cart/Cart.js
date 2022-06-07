import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Row, Col, Button, Container } from "react-bootstrap";
import CartItem from "./CartItem";
import axios from "axios";
import "./style.css";
import { Navbar } from "../navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import TransPopUp from "../../components/accountBox/TransPopup";
function Cart(props) {
  const showCart = useSpring(
    props.isCartOpen
      ? {
          width: "40%",
          background: "#2D3047",
          opacity: 1,
        }
      : {
          width: "0%",
          background: "#eae6e5",
          opacity: 0,
        }
  );

  const [totalCost, setTotalCost]= useState(0);
  const [buyclicked, setbuyclicked]= useState(false);
  const [cartList, setCartList]= useState([]);
  const [popupOpen, setPopupOpen]= useState(true)
  const [transactionID, setTransactionID]= useState('')
  
   localStorage.setItem('amount', totalCost);
  let cartItems= new Set();
  let cost= 0;
  let cartSize= 0;

  if( "cartSize" in localStorage )
    cartSize= localStorage.getItem("cartSize");
  
  useEffect(() => {
   
  cartItems.clear();
  console.log(cartSize)

  for( let i=0;i<cartSize;i++ )
  {
    cartItems.add(localStorage.getItem(`cart[${i}]`));
  }


    cartItems.forEach (function(value) {
      cost += parseInt(localStorage.getItem(`${value}`));
      setCartList([...cartList,value])
      
      console.log("values ", value);

      setTotalCost(cost);
    })
    
}, [])
async function transaction(){
  const User = localStorage.getItem('user')
  
  console.log(User)
try {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  const { data } = await axios.post(
    'http://localhost:5000/api/transactions/',
    {
      'User_id': User, 'Current_amount': totalCost
    },
    config)

  console.log(data)
  //localStorage.setItem('user', data.id)
 // history.push("../../");
 let Bank_Balance = 0;
 let Bank_id = 0;
 let Ecom_Balance = 0;
 const  bankdata  = await axios.post(
  'http://localhost:5000/api/banks/user',
  {
    'User_id': User
  },
  config).then((value)=>( 
    Bank_Balance = value.data.Current_amount,
    Bank_id = value.data._id,
    console.log(Bank_Balance)
  ))
  console.log(Bank_Balance) 
  Bank_Balance = Bank_Balance - totalCost; //user balance 
  Ecom_Balance = Bank_Balance + totalCost;

   const  changeUserBalance  = await axios.put(
  `http://localhost:5000/api/banks/${Bank_id}`,
  {
    'Current_amount': Bank_Balance
  },
  config).then((value)=>( 
    // Bank_Balance = value.data.Current_amount,
    console.log(value),
    console.log(value.data.Current_amount)
  ))  

  const  changeEcomBalance  = await axios.put(
    `http://localhost:5000/api/banks/${'629ebb59e9a4d3fbd9dff48b'}`,
    {
      'Current_amount': Ecom_Balance
    },
    config).then((value)=>( 
      // Bank_Balance = value.data.Current_amount,
      console.log(value),
      console.log(value.data.Current_amount)
    )) 

    setTransactionID(data._id);
    setbuyclicked(true);
    // localStorage.setItem('transID',data._id);
    console.log("locally ",data._id);
}

catch (e) {
 // setCorrect(false)
  console.log(e)
}

}
function handleClose()
  {
    setbuyclicked(false);
    setPopupOpen(false);
  }
function updateCart(id, quantity)
{
  console.log("agey", totalCost);
  cost= totalCost;
  cost+= parseInt(localStorage.getItem(id))*quantity;
  console.log("pore", cost);
  setTotalCost(cost);
}

  return (
    // <Container style = {{color:"black"}}>
    <div style = {{BackgroundColor:"black"}}>
    <div style = {{BackgroundColor:"black"}}>
        <Navbar/>
        {cartSize== 0 ? (
            <h3 style={{ textAlign: "center" }}>
              Your cart is currently empty.
            </h3>
        )
        : (
        <div className="cart">
      
        <div>
          
            <>
              {cartList.map((item) => (
                <CartItem
                  key={item}
                  productId= {item}
                  // uniqueId={item.product_id}
                  updateCart={updateCart}
                  // removeItemFromCart={props.removeItemFromCart}
                  {...item}
                />
              ))}
              {/* <CartItem
                  key={1}
                  uniqueId={1}
                //   updateCart={props.updateCart}
                //   removeItemFromCart={props.removeItemFromCart}
                  quantity={4}
                //   {...item}
                />
                <CartItem
                  key={1}
                  uniqueId={1}
                //   updateCart={props.updateCart}
                //   removeItemFromCart={props.removeItemFromCart}
                  quantity={4}
                //   {...item}
                /> */}
              <Row>
                <Col>
                  <h3 id="total">
                    Total: {totalCost}
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* <a href={props.cart.hosted_checkout_url}> */}
                    <Button id="buy" variant="primary" onClick={transaction} >
                      Buy Now
                    </Button>
                    { buyclicked == true && transactionID!='' ? ( < TransPopUp open={true} transID= {transactionID} onClose= {handleClose} />) : ( < TransPopUp open={false} transID= {transactionID} />)}
                  {/* </a> */}
                </Col>
              </Row>
            </>
          
        </div>
    </div>
    
              
  )
              }
              </div>
              </div>
             
  )
              
            }


export default Cart;