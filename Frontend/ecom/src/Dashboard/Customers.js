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
// // Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

// const rows = [
//   createData(
//     0,
//     "16 Mar, 2019",
//     "Elvis Presley",
//     "Tupelo, MS",
//     "VISA ⠀•••• 3719",
//     312.44
//   ),
//   createData(
//     1,
//     "16 Mar, 2019",
//     "Paul McCartney",
//     "London, UK",
//     "VISA ⠀•••• 2574",
//     866.99
//   ),
//   createData(
//     2,
//     "16 Mar, 2019",
//     "Tom Scholz",
//     "Boston, MA",
//     "MC ⠀•••• 1253",
//     100.81
//   ),
//   createData(
//     3,
//     "16 Mar, 2019",
//     "Michael Jackson",
//     "Gary, IN",
//     "AMEX ⠀•••• 2000",
//     654.39
//   ),
//   createData(
//     4,
//     "15 Mar, 2019",
//     "Bruce Springsteen",
//     "Long Branch, NJ",
//     "VISA ⠀•••• 5919",
//     212.79
//   )
// ];
const user = localStorage.getItem('user')
const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  const [orders, setorders] = useState([])
  const [users, setusers] = useState([])
useEffect(() => {
  async function fetchUsers() {
    const { data } = await axios.get('http://127.0.0.1:5000/api/users')
    console.log(data)
    setusers(data)
}

  async function fetchOrders() {
    const { data } = await axios.get('http://127.0.0.1:5000/api/orders')
    console.log("Orders", data);
    setorders(data)
  }
//   async function fetchBanks() {
//     const { data } = await axios.get(`http://127.0.0.1:5000/api/banks/${user}`)
//     setorders(data)
//     console.log(data)
// }
  
// fetchBanks()

  fetchUsers()
  fetchOrders()

}, [] )
  return (
    <React.Fragment>
      <Title>Customers</Title>
      <Table size="small">
        
        <TableBody>
        {/* <TableRow >
                    <TableCell style={{ "borderColor": "black" }}>{"User Name"}</TableCell>
                    <TableCell style={{ "borderColor": "black" }}>{"Email"}</TableCell>
                  </TableRow> */}
          { (users.length!= 0) ? <h1>
         {users.map((userr) => ( 
           
                  <TableRow >
                    <TableCell style={{ "borderColor": "black" }}>{userr.Name}</TableCell>
                    <TableCell style={{ "borderColor": "black" }}>{userr.Email}</TableCell>
                  </TableRow>
           
              ))}
          
          </h1> : <></>}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
