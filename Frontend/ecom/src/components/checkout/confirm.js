import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { Navbar } from "../navbar";

function Confirm(props) {
    const [cartList, setCartList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    
    let cartItems = new Set();
    let cartSize = 0;
    var quantityStr= ""
    var productList= ""

    // 629dd4721cc1da6a55956f47 -> seller

    if ("cartSize" in localStorage) {
        cartSize = localStorage.getItem("cartSize");

        console.log("first e cartsize", cartSize)
    }

    const GoTODone= () =>
    {
        let history= useHistory();
        history.push("../done");
    }

    async function transaction() {

        
        setLoading(true);

        const User = localStorage.getItem('user')
        const totalCost = localStorage.getItem('amount')

        let cartSize = 0;

        if ("cartSize" in localStorage) 
        {
            cartSize = localStorage.getItem("cartSize");

            // console.log("first e cartsize", cartSize)
        }

        for (let i = 0; i < cartSize; i++) {
            let currentID= localStorage.getItem(`cart[${i}]`);
            productList+= localStorage.getItem(`${currentID}name`)+' ';
            quantityStr+= localStorage.getItem(`${currentID}qty`)+' ';
        }

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

            const { sellerData } = await axios.post(
                'http://localhost:5000/api/seller/',
                {
                    'Transaction_id': data._id,
                    'Quantity': quantityStr,
                    'Product_list': productList
                },
                config).
                catch((e)=>{
                    console.log("seller api te problem", e)
                })

            console.log(data)
            //localStorage.setItem('user', data.id)
            // history.push("../../");
            let Bank_Balance = 0;
            let Bank_id = 0;
            let Ecom_Bank_id = 0;
            let Ecom_Balance = 0;
            const bankdata = await axios.post( // fetching user bank data
                'http://localhost:5000/api/banks/user/',
                {
                    'User_id': User
                },
                config).then((value) => (
                    Bank_Balance = value.data.Current_amount,
                    Bank_id = value.data._id,
                    console.log("Balance ",Bank_Balance)
                )).catch((e)=>{
                    console.log("balance e problem")
                })

            const EcomBankdata = await axios.post( // fetching user bank data
                'http://localhost:5000/api/banks/user/',
                {
                    'User_id': '629ebb2ee9a4d3fbd9dff488'
                },
                config).then((value) => (
                    Ecom_Balance = value.data.Current_amount,
                    Ecom_Bank_id = value.data._id,
                    console.log(Ecom_Balance)
                ))


            console.log(Bank_Balance)
            Bank_Balance = Bank_Balance - totalCost; //user balance 
            Ecom_Balance = Ecom_Balance + totalCost;

            const changeUserBalance = await axios.put( // setting user balance
                `http://localhost:5000/api/banks/${Bank_id}`,
                {
                    'Current_amount': Bank_Balance
                },
                config).then((value) => (
                    // Bank_Balance = value.data.Current_amount,
                    console.log(value),
                    console.log(value.data.Current_amount)
                ))

            const changeEcomBalance = await axios.put(
                `http://localhost:5000/api/banks/${'629ebb59e9a4d3fbd9dff48b'}`,
                {
                    'Current_amount': Ecom_Balance
                },
                config).then((value) => (
                    // Bank_Balance = value.data.Current_amount,
                    console.log(value),
                    console.log(value.data.Current_amount)
                ))

            // setTransactionID(data._id);
            // setbuyclicked(true);
            // localStorage.setItem('transID',data._id);
            console.log("locally ", data._id);

            setLoading(false);
        }

        catch (e) {
            // setCorrect(false)
            console.log(e)
        }

    }

    useEffect(() => {

        cartItems.clear();

        for (let i = 0; i < cartSize; i++) {
            cartItems.add(localStorage.getItem(`cart[${i}]`));
        }

        let templist = []

        cartItems.forEach(function (value) {

            templist.push(value)
        })

        setCartList(templist)

    }, [])
    const listItems3 = cartList.map((item, idx) => {

        return (
            <>
                <tr>
                    <td style={{ "borderColor": "black" }}>{localStorage.getItem(`${item}name`)}</td>
                    <td style={{ "borderColor": "black" }}>{localStorage.getItem(`${item}`)}</td>
                    <td style={{ "borderColor": "black" }}>{localStorage.getItem(`${item}qty`)}</td>
                    <td style={{ "borderColor": "black" }}>{localStorage.getItem('amount')}</td>
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
            <Navbar />
            <div className="loading">
                {loading ?
                    (<HashLoader
                        color={"#142786"}
                        loading={loading}
                        size={160} />)
                    :
                    (<div className="py-4">
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
                                                        <button type="button" className="btn btn-primary" onClick={transaction}>Place Order</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div style={{ "borderColor": "black" }} className="col-md-5">
                                    <table style={{ "borderColor": "black" }} className="table table-bordered">
                                        <thead style={{ "borderColor": "black" }}>
                                            <tr style={{ "borderColor": "black" }}>
                                                <th style={{ "borderColor": "black" }} width="50%">Product</th>
                                                <th style={{ "borderColor": "black" }} >Price</th>
                                                <th style={{ "borderColor": "black" }}>Quantity</th>
                                                <th style={{ "borderColor": "black" }}>Total</th>

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

                    </div>)}
            </div>
        </div>
    )
}

export default Confirm;