
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios('/data.json')
        .then((response)=>{
            const item = response.data.find(e=> e.id == parseInt(userId))
            setUser(item)
        })
  }, [userId]);
  
  return <div>
    <div style={{backgroundColor:"orangered",padding:"1rem 2rem"}}>
        <h1>{user.name}</h1>
        <h1>{user.gender}</h1>
        <h1>{user.physics}</h1>
        
    </div>
  </div>;
};
