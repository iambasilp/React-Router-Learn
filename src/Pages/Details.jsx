import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";

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
  
  if(!user){
    return null
  }

  return (
    <div>
      <div style={{ backgroundColor: "orangered", padding: "1rem 2rem" }}>
        <h1>{user.name}</h1>
        <h1>{user.gender}</h1>
        <h1>{user.physics}</h1>
      </div>
      <button
        onClick={() => {
          navigate("/Users");
        }}
      >
        Back
      </button>
    </div>
  );
};
