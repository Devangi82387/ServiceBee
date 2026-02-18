import React, { useState } from "react";
import CustomerAuth from "./CustomerAuth";
import ServiceProviderAuth from "./ServiceProviderAuth";
import AdminAuth from "./AdminAuth";
import "../style/Home.css";

const Home = () => {
  const [type, setType] = useState("");

  if (type === "customer") return <CustomerAuth />;
  if (type === "provider") return <ServiceProviderAuth />;
  if (type === "admin") return <AdminAuth />;

  return (
    <div className="home-container">

      <div className="home-card">

        <h1 className="home-title">Welcome to Service-Bee 🐝</h1>
        <p className="home-subtitle">Choose your role to continue</p>

        <div className="role-container">

          {/* Customer */}
          <div 
            className="role-card customer"
            onClick={() => setType("customer")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/8781/8781951.png"
              alt="Customer"
              className="role-img"
            />
            <h3>Customer</h3>
            <p>Book services easily</p>
          </div>

          {/* Provider */}
          <div 
            className="role-card provider"
            onClick={() => setType("provider")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995470.png"
              alt="Provider"
              className="role-img"
            />
            <h3>Service Provider</h3>
            <p>Offer your services</p>
          </div>

          {/* Admin */}
          <div 
            className="role-card admin"
            onClick={() => setType("admin")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Admin"
              className="role-img"
            />
            <h3>Admin</h3>
            <p>Manage platform</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;