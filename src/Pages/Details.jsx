import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./Styles/Details.css";
export const Details = () => {

const { userId } = useParams();
const location = useLocation()
const state = location.state || {}
const [user, setUser] = useState(state.data);
const navigate = useNavigate();
   
  useEffect(() => {
    if(!user){
            axios("/data.json").then((response) => {
      const data = response.data.find((item) => item.id == parseInt(userId));
      setUser(data);
    });
    }

  }, [userId,user]);
  console.log(user);
  return (
    <div className="details">
      <div className="back" onClick={() => {
        navigate('/Users')
      }}>
       <svg className="back-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13v7l-8-8 8-8v7h8v2z"/></svg>
      </div>
      <div className="details_card">
        <span className="details_roll">00{user.id}</span>
        <span className="details_name">{user.name}</span>
        <p className="details_description">{user.description}</p>
        <div className="info_box">
          <div className="details_age">Age: {user.age}</div>
          <div className="details_gender">{user.gender}</div>
        </div>
      </div>
    </div>
  );
};
