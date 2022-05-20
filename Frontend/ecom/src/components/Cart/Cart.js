import React from "react";
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

  return (
    <div>
        <Navbar/>
        <div className="cart">
      {props.cart == undefined ? (
        <div>
          {props=== 0 ? (
            <h3 style={{ textAlign: "center" }}>
              Your cart is currently empty.
            </h3>
          ) : (
            <>
              {/* {props.cart.line_items.map((item) => (
                <CartItem
                  key={item.id}
                  uniqueId={item.product_id}
                  updateCart={props.updateCart}
                  removeItemFromCart={props.removeItemFromCart}
                  quantity={item.quantity}
                  {...item}
                />
              ))} */}
              <CartItem
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
                />
              <Row>
                <Col>
                  <h3 id="total">
                    Total: {"$100"}
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
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
    </div>
  );
}

export default Cart;