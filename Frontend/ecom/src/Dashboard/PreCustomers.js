import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import Moreorders from "./Moreorders";
import axios from "axios";
import { More } from "@material-ui/icons";
import { Link , Redirect} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));
const user = localStorage.getItem('user')

export default function Orders() {
  const classes = useStyles();
  const [orders, setorders] = useState([])
  const [users, setusers] = useState([])
useEffect(() => {

  async function fetchOrders() {
    const { data } = await axios.get('http://127.0.0.1:5000/api/orders')
    setorders(data)
    console.log(data)
}
//   async function fetchBanks() {
//     const { data } = await axios.get(`http://127.0.0.1:5000/api/banks/${user}`)
//     setorders(data)
//     console.log(data)
// }
  
// fetchBanks()
  fetchOrders()

}, [] )
  return (
    <React.Fragment>
      <Title>Orders</Title>
      <Table size="small">
        <TableHead >
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Products</TableCell>
            <TableCell>Total Cost</TableCell>
            <TableCell>Product Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { orders!=null ? <>
          {orders.map(order => 
        
                  ( order.userid == user && order.userid ?   <TableRow >
                      <TableCell>{order.date}</TableCell>
                    <TableCell>{order.username}</TableCell>
                    <TableCell>{order.products}</TableCell>
                     <TableCell>{order.cost}</TableCell>
                     <TableCell>shipped</TableCell>
                  </TableRow>  : <></>
           
            )
          )}
          </> : <></>}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}