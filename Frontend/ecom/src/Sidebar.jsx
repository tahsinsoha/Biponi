import React from "react";
import "./Css/Components/Sidebar.css";
import {
  AiOutlineDashboard,
  AiOutlineShareAlt,
  AiOutlineShoppingCart,
  AiOutlineBook
} from "react-icons/ai";
import { GrCatalogOption } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
const Sidebar = () => {
  const sidemenus = [
    {
      menu_name: "Dashboard",
      menu_icon: AiOutlineDashboard,
      active: true
    },
    {
      menu_name: "Catalog",
      menu_icon: AiOutlineBook
    },
    {
      menu_name: "Sales",
      menu_icon: AiOutlineShoppingCart
    },
    {
      menu_name: "Customers",
      menu_icon: BsPeople
    },
    {
      menu_name: "Marketing",
      menu_icon: AiOutlineShareAlt
    }
  ];
  return (
    <>
      <div className="sidebar">
        <div className="brand">OneStop</div>
        <div className="links">
          <ul>
            {sidemenus.map((value) => {
              return (
                <li className={value.active ? "active" : ""}>
                  <a href="">
                    <value.menu_icon />
                    {value.menu_name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
