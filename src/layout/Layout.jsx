import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

