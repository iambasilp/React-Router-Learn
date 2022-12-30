import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/Common";
const LogedInOutlet = () => {
  if (isLoggedIn()) {
    return <Outlet />;
  }else {
    return <Navigate to='/Login'/>
  }
};

export default LogedInOutlet;
