import React from "react";
import { NavLink, useResolvedPath} from "react-router-dom";
import { isPathAllowd } from "../../utils/Common";
const PrivateLink = (props) => {
  const to = props.to
  const path = useResolvedPath(to)
  console.log(path);
  const isAllowed = isPathAllowd(path.pathname);
  if (isAllowed) {
    return <NavLink {...props} />;
  }
};

export default PrivateLink;
