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
    const { data } = await axios.get('http://127.0.0.1:5000/api/seller')
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
            <TableCell> Transaction ID  </TableCell>
            <TableCell>Products</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { orders!=null ? <>
          {orders.map(order => 
        
                    <TableRow >
                      <TableCell>{order.Transaction_id}</TableCell>
                    <TableCell>{order.Product_list}</TableCell>
                    <TableCell>{order.Quantity}</TableCell>
                  </TableRow> 
           
            
          )}
          </> : <></>}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}