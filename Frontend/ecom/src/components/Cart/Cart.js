import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Row, Col, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import "./style.css";
import { Navbar } from "../navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const [cartList, setCartList]= useState([]);
  
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
      cost += parseInt(localStorage.getItem(value));
      setCartList([...cartList,value])
      
      console.log("cartlist ", cost);

      setTotalCost(cost);
    })
    
}, [])

function updateCart(id, quantity)
{
  console.log("agey", totalCost);
  cost= totalCost;
  cost+= parseInt(localStorage.getItem(id))*quantity;
  console.log("pore", cost);
  setTotalCost(cost);
}

  return (
    <div>
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
                    <Button id="buy" variant="primary">
                      Buy Now
                    </Button>
                  {/* </a> */}
                </Col>
              </Row>
            </>
          
        </div>
    </div>
              
  )
              }
              </div>
  )
              
            }


export default Cart;