import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";

function Confirm(props)
{
    const [cartList, setCartList]= useState([]);
    let cartItems= new Set();
    let cartSize= 0;

    if( "cartSize" in localStorage )
    {
      cartSize= localStorage.getItem("cartSize");

      console.log("first e cartsize", cartSize)
    }

    useEffect(() => {
   
        cartItems.clear();
      
        for( let i=0;i<cartSize;i++ )
        {
          cartItems.add(localStorage.getItem(`cart[${i}]`));
        }
      
          let templist= []
      
          cartItems.forEach (function(value) {
            
            templist.push(value)
          })
      
          setCartList(templist)
          
      }, [])
      const listItems3 = cartList.map((item,idx) => {
       
        return (
         <>
         <tr>
    <td style={{"borderColor": "black"}}>{localStorage.getItem(`${item}name`)}</td>
    <td style={{"borderColor": "black"}}>{localStorage.getItem(`${item}`)}</td>
    <td style={{"borderColor": "black"}}>{localStorage.getItem(`${item}qty`)}</td>
    <td style={{"borderColor": "black"}}>{localStorage.getItem('amount')}</td>
        </tr>
       </>
          );
                                        //     <tr>
                                        //         <h1>hiii</h1>
                                        // <td style={{"borderColor": "black"}}>{localStorage.getItem(`${item}name`)}</td>
                                        // <td style={{"borderColor": "black"}}>{localStorage.getItem(`${item}`)}</td>
                                        // <td style={{"borderColor": "black"}}>{localStorage.getItem(`${item}qty`)}</td>
                                        // <td style={{"borderColor": "black"}}>{localStorage.getItem('amount')}</td>
                                        //     </tr>
                                        
      });
    

    return (
        <div>
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Basic Information</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>First Name</label>
                                                <input type="text" name="firstname" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Last Name</label>
                                                <input type="text" name="lastname" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Phone Number</label>
                                                <input type="text" name="phone" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Email Address</label>
                                                <input type="text" name="email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label>Full Address</label>
                                                <textarea rows="3" className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>Division</label>
                                                <input type="text" name="division" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>District</label>
                                                <input type="text" name="district" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>Zip Code</label>
                                                <input type="text" name="zipcode" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group text-end">
                                                <button type="button" className="btn btn-primary">Place Order</button>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div style={{"borderColor": "black"}} className="col-md-5">
                            <table style={{"borderColor": "black"}} className="table table-bordered">
                                <thead style={{"borderColor": "black"}}>
                                    <tr style={{"borderColor": "black"}}>
                                        <th style={{"borderColor": "black"}} width="50%">Product</th>
                                        <th style={{"borderColor": "black"}} >Price</th>
                                        <th style={{"borderColor": "black"}}>Quantity</th>
                                        <th style={{"borderColor": "black"}}>Total</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                   listItems3}
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Confirm;