import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import axios from "axios";
import { useState, useEffect } from "react";
const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});
const user = localStorage.getItem('user')
console.log(user)
export default function Deposits() {
  const classes = useStyles();

  const [banks, setbanks] = useState(null)
  const[orders, setorders] = useState(null)
  useEffect(() => {

    async function fetchBanks() {
      const { data } = await axios.post('http://127.0.0.1:5000/api/banks/user',
      {
        'User_id': user 
      }, )
      setbanks(data)
      console.log(JSON.stringify(data))
  } 
  async function fetchOrders() {
    const { data } = await axios.get(`http://127.0.0.1:5000/api/users/${user}`)
    setorders(data)
    console.log(data)
}
  //629ebb59e9a4d3fbd9dff48b
    
  fetchBanks()
  fetchOrders()
  
  }, [])
  return (
    <React.Fragment>
      <Title>User Details</Title>
      <Typography component="p" >
     { banks!=null?  <>Bank Account No: {banks.Account_no}  </> : <></>}
      </Typography>
      <Typography component="p" color="primary" >
      { orders!=null?  <>Name: {orders.Name} </> : <></>}
      </Typography>
      <div>
      <Typography component="p" color="primary" >
        { orders!=null?  <>Email: {orders.Email} </> : <></>}
        </Typography >
      </div>
    </React.Fragment>
  );
}
