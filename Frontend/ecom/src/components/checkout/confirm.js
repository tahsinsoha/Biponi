import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";

function Confirm()
{
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

                        <div style="border-color:black;" className="col-md-5">
                            <table style="border-color:black;" className="table table-bordered">
                                <thead style="border-color:black;">
                                    <tr style="border-color:black;">
                                        <th style="border-color:black;" width="50%">Product</th>
                                        <th style="border-color:black;" >Price</th>
                                        <th style="border-color:black;">Quantity</th>
                                        <th style="border-color:black;">Total</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="border-color:black;">T shirt</td>
                                        <td style="border-color:black;">750</td>
                                        <td style="border-color:black;">2</td>
                                        <td style="border-color:black;">1500</td>
                                    </tr>
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