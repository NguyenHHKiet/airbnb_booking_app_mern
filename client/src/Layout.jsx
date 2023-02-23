import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Header />
      <div className="max-w-5xl my-0 mx-auto py-0 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
