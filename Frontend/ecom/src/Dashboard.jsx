import React from "react";
import "./Css/Components/Dashboard.css";
import Analytics from "./Analytics";
import TotalBusiness from "./TotalBusiness";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <>
    <Sidebar></Sidebar>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="grid">
          <div className="one">
            <TotalBusiness />
          </div>
          <div className="two">
            <Analytics />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
