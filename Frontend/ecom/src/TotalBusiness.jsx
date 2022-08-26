import React from "react";
import "./Css/Components/TotalBusiness.css";
import { BsCurrencyDollar, BsPeople } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiRadioButtonLine } from "react-icons/ri";
const TotalBusiness = () => {
  const total = [
    {
      number: "$5,5888",
      title1: "Total Sales",
      icon: BsCurrencyDollar
    },
    {
      number: "30",
      title1: "Total Orders",
      icon: AiOutlineShoppingCart
    },
    {
      number: "20",
      title1: "Total Customers",
      icon: BsPeople
    },
    {
      number: "0",
      title1: "People Online",
      icon: RiRadioButtonLine
    }
  ];
  return (
    <>
      <div className="row_boxes">
        {total.map((totalitems, index) => {
          return (
            <div className="row_boxes_inner" key={index}>
              <div className="first">
                <p className="number">{totalitems.number}</p>
                <p className="title">{totalitems.title1}</p>
              </div>
              <div className="second">
                <totalitems.icon />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TotalBusiness;
