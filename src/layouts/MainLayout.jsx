import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CookieBanner from "../components/common/CookieBanner";
import SearchOverlay from "../components/common/SearchOverlay";

const MainLayout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <main style={{ flex: "1" }}>
        {/* The <Outlet> component renders the current page's content */}
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <SearchOverlay />
    </div>
  );
};

export default MainLayout;
