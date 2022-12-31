import React from "react";
import { isLoggedin } from "../../Utils/common";
import { Outlet, Navigate } from "react-router-dom";
const LoggedInOutlet = () => {
  if (isLoggedin()) {
    return <Outlet />;
  }else{
    return <Navigate to="Login"/>
  }
};

export default LoggedInOutlet;
