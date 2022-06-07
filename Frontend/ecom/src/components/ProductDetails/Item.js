import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import Animation from "./Animation";
import "./style.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navbar } from "../navbar";

toast.configure();

function Item(props) {
  const [color, setColor] = useState("#80CED7");
  const [product, setproduct] = useState(null)
  const {id}= useParams()

  useEffect(() => {

    console.log("item ")
    
    async function fetchProduct(){
        const {data}= await axios.get(`http://127.0.0.1:5000/api/products/${id}`)
        setproduct(data)
        console.log(data)
    }

    fetchProduct()
}, [])

function addToCart()
{
  let cartSize= localStorage.getItem("cartSize");

  if(cartSize==null)
    cartSize= 0;

  console.log("Size here", cartSize);

  if( (`${id}` in localStorage) )
  {
    console.log("ENtered id condition and", localStorage.getItem(`${id}`));
  }  
  else
  {
    localStorage.setItem(`cart[${cartSize}]`, id);
    localStorage.setItem(`${id}`, product.Price);

    cartSize++;
    localStorage.setItem("cartSize", cartSize);
  }
  // }


  toast.success("Product added to cart", {position:toast.POSITION.TOP_CENTER})
}

  const description = "Description";
    // props.description !== null
    //   ? props.description.slice(3, props.description.length - 4)
    //   : "";

  return (
    <div>
      <Navbar />
      <Row className="item" style= {{backgroundColor:"#2b3039"}}>
      <Col sm={6} >
        <Animation color={color} productId={id} />
      </Col>
      <Col className="info"  >
        { product!==null?<h2 style= {{color:"white"}}>{product.Title}</h2>:<></>}
        { product!==null?<h2  style= {{color:"white"}}>{product.Price}</h2>:<></>}
        <Row className="buttonRow">
          <Col>
            <p style= {{color:"white"}}>Available Colors:</p>
            <Button id="blue" onClick={() => setColor("#80CED7")}></Button>
            <Button id="flax" onClick={() => setColor("#E9D985")}></Button>
            <Button id="red" onClick={() => setColor("#BF211E")}></Button>
          </Col>
          <Col style={{ textAlign: "right" }}>
            {/* <p>Price: {props.price.formatted_with_symbol}</p> */}
            {/* <a href={props.checkout_url.display}> */}
              <Button style={{color: "#6C7AB6"}} id="buy" variant="primary" onClick={addToCart}>
                Add to Cart
              </Button>
            {/* </a> */}
          </Col>
        </Row>
      </Col>
    </Row>
   
    </div>
  );
}

export default Item;