import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Users.css";
export const Users = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()
  const cls = searchParams.get('class')
  console.log(cls);
  useEffect(() => {
    axios("data.json").then((response) => {
      setData(response.data);
    });
  }, []);
  const navigate = useNavigate()
  function handleSelectChange(event){
    setSearchParams({
      class:event.target.value,
      CreatedBy:"Basil"
    })
  }

  return (
    <div style={{marginTop:"5rem"}}>
      <div className="options">
        <label htmlFor="">
          Select Class
        </label>
        <div>
          <select name="" id="" onChange={handleSelectChange}>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      {data.filter((item)=>{
        if(!cls){
          return true;
        }
        return cls === item.class
      }).map((item) => {
        return (
          <div onClick={()=>{
            navigate(`${item.id}`,{
              replace:false,
              state:{
                data:item,
              }
            })
          }} key={item.id} className="users">
            <div className="user_item">
              <div className="user_name">
               {item.name}
              </div>
              <div className="user_sex">{item.gender}</div>
              <div className="user_class"> Class {item.class}</div>
            </div>
          </div>  
        );
      })}
    </div>
  );
};
