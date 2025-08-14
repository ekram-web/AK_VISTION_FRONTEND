import React from "react";
import { Outlet } from "react-router-dom";

// We will create these components later
// import Navbar from '../components/common/Navbar';
// import Footer from '../components/common/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      <main className="flex-grow">
        {/* Outlet is where the content of our pages will be rendered */}
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
