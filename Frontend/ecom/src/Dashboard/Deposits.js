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
  useEffect(() => {

    async function fetchBanks() {
      const { data } = await axios.post('http://127.0.0.1:5000/api/banks/user',
      {
        'User_id': user 
      }, )
      setbanks(data)
      console.log(JSON.stringify(data))
  } 
  //629ebb59e9a4d3fbd9dff48b
    
  fetchBanks()
  
  }, [])
  return (
    <React.Fragment>
      <Title>Current Balance</Title>
      <Typography component="p" variant="h4">
     { banks!=null?  <h1>{banks.Current_amount} </h1> : <></>}
      </Typography>
      {/* <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography> */}
      <div>
        {/* <Link color="primary" href="javascript:;">
          View balance
        </Link> */}
      </div>
    </React.Fragment>
  );
}
