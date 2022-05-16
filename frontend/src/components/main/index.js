import React from "react";
import { Outlet } from "react-router-dom";
import SearchAppBar from "./header";

const Main = () => {
  return (
    <div>
      <SearchAppBar />
      <Outlet />
    </div>
  );
};

export default Main;
