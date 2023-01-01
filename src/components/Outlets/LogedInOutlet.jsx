import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/Common";
import { isPathAllowd } from "../../utils/Common";
const LogedInOutlet = () => {
  const {pathname} = useLocation()
  console.log(pathname);
  
  const isAllowed = isPathAllowd(pathname)
  console.log("isAllowd", isAllowed)
  if (isLoggedIn() && isAllowed) {
    return <Outlet />;
  }else {
    return <Navigate to='/Login'/>
  }
};

export default LogedInOutlet;
