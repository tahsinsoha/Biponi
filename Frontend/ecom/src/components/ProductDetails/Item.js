import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Animation from "./Animation";
import "./style.css";
import axios from 'axios';

function Item(props) {
  const [color, setColor] = useState("#80CED7");
  const [product, setproduct] = useState(null)
  useEffect(() => {

    console.log("item ")
    
    async function fetchProduct(){
        const {data}= await axios.get(`http://127.0.0.1:5000/api/products/6288fca2cf6785cbfd5d8d23`)
        setproduct(data)
        console.log(data)
    }

    fetchProduct()
}, [])

  const description = "Description";
    // props.description !== null
    //   ? props.description.slice(3, props.description.length - 4)
    //   : "";

  return (
    <Container>
      <Row className="item">
      <Col sm={6} >
        <Animation {...props} color={color} />
      </Col>
      <Col className="info">
        { product!==null?<h2>{product.Title}</h2>:<></>}
        { product!==null?<h2>{product.Price}</h2>:<></>}
        <Row className="buttonRow">
          <Col>
            <p>Available Colors:</p>
            <Button id="blue" onClick={() => setColor("#80CED7")}></Button>
            <Button id="flax" onClick={() => setColor("#E9D985")}></Button>
            <Button id="red" onClick={() => setColor("#BF211E")}></Button>
          </Col>
          <Col style={{ textAlign: "right" }}>
            {/* <p>Price: {props.price.formatted_with_symbol}</p> */}
            {/* <a href={props.checkout_url.display}> */}
              <Button id="buy" variant="primary">
                Buy Now
              </Button>
            {/* </a> */}
          </Col>
        </Row>
      </Col>
    </Row>
    </Container>
  );
}

export default Item;