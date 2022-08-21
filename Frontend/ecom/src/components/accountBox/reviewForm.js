import React, { useState } from "react";
import "./styles.css";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios'
const ReviewForm = ({onclose, productID}) => {
  const [selectedFile, setSelectedFile]= useState()

  function changeHandler(event) {
      setSelectedFile(event.target.files[0]);
  
    };
  const [formData, setFormData] = useState({
    account_no: "",
    pin: ""
  });

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
    //   console.log(Data)
    // const result= await axios.post("http://localhost:5000/api/banks/",
    //   Data
    // )
    //   .then((result) => {
    //     console.log("Success:", result);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    //   console.log(result)
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const { data } = await axios.post(
      'http://localhost:5000/api/products/`${productID}`/reviews',
      {
        'Rating': rating,
        'Comment': comment, 
      },
      config)
      console.log(data)
      console.log(data.User_id)
      onclose();
  }

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

    
  const { account_no, pin } = formData;

  return (
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
        value={rating}
        onChange={e => updateFormData(e)}
        placeholder="Rating"
        type="text"
        name="rating"
        required
      />
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
        value={comment}
        onChange={e => updateFormData(e)}
        placeholder="Comment"
        type="text"
        name="comment"
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
        value={description}
        onChange={e => updateFormData(e)}
        placeholder="description"
        type="text"
        name="description"
        required
      />
      {/* <image
        value={image}
        onChange={e => updateFormData(e)}
        placeholder="image"
        type="image"
        name="image"
        required
      /> */}

{/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton> */}
{/* 
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */} 

{/* <div className="upload">
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
        type="file" name="file" className = "upload" onChange={changeHandler} />
        </div>
      
        <br></br> */}

      <button type="submit">Submit</button>
    </form>
  );
};


export default  ReviewForm;