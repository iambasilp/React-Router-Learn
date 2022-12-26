import { useEffect, useState } from "react";
import axios from "axios";
import {
  NavLink,
  useParams,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import "./Details.css";
export const Details = () => {
  const { userId } = useParams();
  const location = useLocation();
  const state = location.state || {};

  const [user, setUser] = useState(state.data);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      axios("/data.json").then((response) => {
        const item = response.data.find((e) => e.id == parseInt(userId));
        setUser(item);
      });
    }
  }, [userId, user]);
  if (!user) {
    return null;
  }

  return (
    <div>
      <div style={{ backgroundColor: "#000080",color:"white", padding: "1rem 2rem" }}>
        <h1  style={{textTransform:"capitalize"}}>{user.name}</h1>
        <h1>{user.gender}</h1>
        <h1>{user.physics}</h1>
      </div>
      <button 
      className="backbutton"
        onClick={() => {
          navigate('/Users');
        }}
      >
        Back
      </button>
      <div className="sub-menu">
        <NavLink className="menu" to="" end>
          Marks
        </NavLink>
        <NavLink className="menu" to="Sports">
          Sports
        </NavLink>
      </div>
      <div className="detail-body">
        <Outlet context={user}/>
      </div>
    </div>
  );
};
