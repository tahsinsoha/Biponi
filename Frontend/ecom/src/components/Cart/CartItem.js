import React, {useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Animation from "./Animation";


const CartItem = (props) => {

  const [quantity, setQuantity]= useState(1);

  const handleIncrement = (e) => {
    e.preventDefault();
    setQuantity(quantity+1)
    props.updateCart(props.productId, 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();

    if( quantity==1 )
    {
      props.removeItem(props.productId)
      props.updateCart(props.productId, -quantity);
      setQuantity(0);
      return;
    }

    setQuantity(quantity-1);
    props.updateCart(props.productId, -1);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    props.removeItem(props.productId)
    props.updateCart(props.productId, -quantity);
    setQuantity(0);
  };

  return (
    <Container style = {{backgroundColor:"#2d343e"}}>
    <div style = {{backgroundColor:"#2d343e"}}>
      <Row style={{maxHeight:"250px"}}>
        <Col xs={6} style={{maxHeight:"250px"}} >
          <Animation {...props} />
        </Col>
        <Col>
        <Row>
        <Col xs={8} style={{marginTop:"60px"}}>
          <h4>Jacket

          </h4>
        </Col>
        <Col xs={3}>
          {/* <h4> {props.price.formatted_with_symbol}</h4> */}
        </Col>
        <Col>
          <p>
            Quantity:{" "}
            <span>
              <button className="quantityButton" onClick={handleDecrement}>
                <i className="fas fa-minus"></i>
              </button>
            </span>{" "}
            {quantity}{" "}
            <span>
              <button className="quantityButton" onClick={handleIncrement}>
                <i className="fas fa-plus"></i>
              </button>
            </span>
          </p>
        </Col>
        <Col xs={2}>
          <span>
            <button className="quantityButton" onClick={handleRemove}>
              <i className="fas fa-trash"></i>
            </button>
          </span>
        </Col>
        </Row>
        </Col>
      </Row>
      {/* <Row className="cartInfo">
        
      </Row> */}
    </div>
    </Container>
  );
};

export default CartItem;