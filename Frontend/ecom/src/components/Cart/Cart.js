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
  const [listChanged, setListChanged]= useState(false)
  
  
   localStorage.setItem('amount', totalCost);
  let cartItems= new Set();
  let cost= 0;
  let cartSize= 0;

  if( "cartSize" in localStorage )
    cartSize= localStorage.getItem("cartSize");
  
    function removeItem(id)
    {
      
      let newList= []
      
      for( let i=0;i<cartList.length;i++ )
      {
        newList.push(cartList[i]);
        console.log("inside loop", cartList[i]);
      }

        console.log("size",newList.length)

        for( let i=0;i<newList.length;i++ )
        {
          console.log(newList[i]);
          if( newList[i]==id )
          {
            console.log("found")
            newList.splice(i,1);
          }
        }

        setCartList(newList);

        console.log("New cart list");
        console.log(cartList);

        let idx= 0;

        cartItems.clear();

        for( let i=0;i<cartList.size;i++ )
        {
          cartItems.add(cartList[i])
        }

        cartItems.forEach (function(value) {
            localStorage.setItem(`cart[${idx++}]`, value);
        
        console.log("idx size", idx);

        localStorage.setItem('cartSize', idx);
      })
    }

  useEffect(() => {
   
  cartItems.clear();
  console.log(cartSize)

  for( let i=0;i<cartSize;i++ )
  {
    cartItems.add(localStorage.getItem(`cart[${i}]`));
  }

    let templist= []

    cartItems.forEach (function(value) {
      cost += parseInt(localStorage.getItem(`${value}`));
      templist.push(value)
      
      console.log("values ", value);

      console.log(cartList)

      setTotalCost(cost);
    })

    setCartList(templist)
    
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
    // <Container style = {{color:"#2d343e"}}>
    
    <div>
        <Navbar/>
        {cartSize== 0 ? (
          <div>
            <h3 style={{ textAlign: "center" }}>
              Your cart is currently empty.
            </h3>
            </div>
        )
        : (
        <div className="cart" style = {{backgroundColor:"#2d343e"}}>
      
        <div style = {{backgroundColor:"#2d343e"}} >
          
            
              {cartList.map((item) => (
                <CartItem  
                  key={item}
                  productId= {item}
                  removeItem= {removeItem}
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
                <Container >
              <Row style = {{Color:"#2d343e"}}>
                <Col style = {{Color:"#2d343e"}}>
                  <h3 id="total">
                    Total: {totalCost}
                  </h3>
                </Col>
              </Row>
              <Row style = {{Color:"#2d343e"}}>
                <Col style = {{Color:"#2d343e"}}>
                  {/* <a href={props.cart.hosted_checkout_url}> */}
                    <Button id="buy" variant="primary" onClick={transaction} >
                      Buy Now
                    </Button>
                    { buyclicked == true && transactionID!='' ? ( < TransPopUp open={true} transID= {transactionID} onClose= {handleClose} />) : ( < TransPopUp open={false} transID= {transactionID} />)}
                  {/* </a> */}
                </Col>
              </Row>
              </Container>
          
        </div>
    </div>
    
              
  )
              }
              </div>
            
             
  )
              
            }


export default Cart;