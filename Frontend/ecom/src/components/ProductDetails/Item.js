import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import Animation from "./Animation";
import "./style.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navbar } from "../navbar";
import Rating from "./Rating";
import { Card } from 'react-bootstrap'
toast.configure();

function Item(props) {
  const [color, setColor] = useState("#80CED7");
  const [product, setproduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {

    console.log("item ")

    async function fetchProduct() {
      const { data } = await axios.get(`http://127.0.0.1:5000/api/products/${id}`)
      setproduct(data)
      console.log(data)
    }

    fetchProduct()
  }, [])

  function addToCart() {
    let cartSize = localStorage.getItem("cartSize");

    if (cartSize == null)
      cartSize = 0;

    console.log("Size here", cartSize);

    if ((`${id}` in localStorage)) {
      console.log("ENtered id condition and", localStorage.getItem(`${id}`));
    }
    else {
      localStorage.setItem(`cart[${cartSize}]`, id);
      localStorage.setItem(`${id}`, product.Price);

      cartSize++;
      localStorage.setItem("cartSize", cartSize);
    }
    // }


    toast.success("Product added to cart", { position: toast.POSITION.TOP_CENTER })
  }
  const [formData, setFormData] = useState({
    rating: "",
    comment: ""
  });
  const { price, quantity, description } = formData;
    
async function handleSubmission(event) {

  event.preventDefault();
  const Data = new FormData();

  console.log("submit clicked")

  Data.append("Rating", formData.rating)
  Data.append("Comment", formData.comment)
  Data.append("User_id", localStorage.getItem('user'))
 const User =  localStorage.getItem('user')
 //const amount = 80000;
 console.log(User)
 
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  const { data } = await axios.post(
    `http://localhost:5000/api/products/${id}/reviews`,
    {
      'Rating': formData.rating,
      'Comment': formData.comment, 
    },
    config)
    console.log(data)
    console.log(data.User_id)
  
}

// 629ec3706ae7b0bad55b9cd4

const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  //const description = "Description";
  // props.description !== null
  //   ? props.description.slice(3, props.description.length - 4)
  //   : "";
  return (
    <div>
      <Navbar />
      <Row className="item" style={{ backgroundColor: "#2b3039" }}>
        <Col sm={6} >
          <Animation color={color} productId={id} />
        </Col>
        <Col className="info"  >
          {product !== null ? <h2 style={{ color: "white" }}>{product.Title}</h2> : <></>}
          {product !== null ? <h2 style={{ color: "white" }}>{product.Price}</h2> : <></>}
          <Row className="buttonRow">
            <Col>
              <p style={{ color: "white" }}>Available Colors:</p>
              <Button id="blue" onClick={() => setColor("#80CED7")}></Button>
              <Button id="flax" onClick={() => setColor("#E9D985")}></Button>
              <Button id="red" onClick={() => setColor("#BF211E")}></Button>
            </Col>
            <Col style={{ textAlign: "right" }}>
              {/* <p>Price: {props.price.formatted_with_symbol}</p> */}
              {/* <a href={props.checkout_url.display}> */}
              <Button id="buy" variant="primary" onClick={addToCart}>
                Add to Cart
              </Button>
              {/* </a> */}
              {product!==null && product.reviews !== null ? <Card.Text as='div'>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </Card.Text> : <></>}
              <form onSubmit={handleSubmission}>
      <input
      style={{
        "display": "block",
    "min-width": "90%",
    "margin": "1em",
    "padding": "1em",
    "width": "24em",
    "border-radius": "8px",
    "border-style": "none",
    "border": "1px solid #e4e6e8",
    "transition": "0.1s ease"
      }}
        value={formData.rating}
        onChange={e => updateFormData(e)}
        placeholder="Rating"
        type="text"
        name="rating"
        required
      />
      {/* <input
      style={{
        "display": "block",
    "min-width": "90%",
    "margin": "1em",
    "padding": "1em",
    "width": "24em",
    "border-radius": "8px",
    "border-style": "none",
    "border": "1px solid #e4e6e8",
    "transition": "0.1s ease"
      }}
        value={formData.comment}
        onChange={e => updateFormData(e)}
        placeholder="Comment"
        type="text"
        name="comment"
        required
      />
       */}

      <button type="submit">Submit</button>
    </form>

              {/* {product!==null && product.reviews !== null ? <h2 style={{ color: "white" }}>{"lalala"}</h2> : <>  </>} */}
             
            </Col>
          </Row>
        </Col>
      </Row>

    </div>
  );
}

export default Item;