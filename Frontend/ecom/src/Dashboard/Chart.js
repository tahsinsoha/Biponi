import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}


export default function Chart() {

  const [values, setValues]= useState([]);

  async function fetchOrders()
{
  const {data}  = await axios.get(
    'http://localhost:5000/api/orders/'
  )
  
  let xTime= 0;
  let total= 0;

  data.forEach(element => {
    
    console.log("element "+xTime+" ");
    console.log(element)

    if(element.cost!=null)
    {
      xTime++;
      total+= parseInt(element.cost)
    setValues([...values,createData(xTime+":00", total)]);

    }
  });
}

  useEffect(()=>{

    fetchOrders();

  },[])

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={values}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
              Sales
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
