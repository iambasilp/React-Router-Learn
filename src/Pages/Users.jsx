import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Styles/Users.css'
import {useSearchParams, useNavigate } from 'react-router-dom'
export const Users = () => {
    const [user,setUser] = useState([])
    useEffect(()=>{
        axios('/data.json')
        .then((response)=>{
            setUser(response.data)
        })
    },[])
    const navigate = useNavigate()
   const [searchParams,setSearchParams] = useSearchParams()
   const ID = searchParams.get('id')
   function handleChangeOption(event){
    const value = event.target.value;
    setSearchParams({
        id:value
    })
   }
   console.log("SearchParams", ID);
  return (
    <div className='users'>
        
        <div className="options" onChange={handleChangeOption}>
            <select name="" id="">
                <option value="0">Roll No</option>
                <option value="1">001</option>
                <option value="2">002</option>
                <option value="3">003</option>
                <option value="4">004</option>
                <option value="5">005</option>
                <option value="6">006</option>
            </select>
        </div>
        {
            user.filter((mean)=>{
                if(!ID){
                    return true
                }
                return ID === mean.id
            }).map((item)=>{
                return (
                  <div key={item.name} className="card" onClick={
                    ()=>{
                        navigate(`${item.id}`,{
                            replace:false,
                            state:{
                                data:item
                            }
                        })
                    }
                  }>
                    <div  className='name'>{item.name}</div>
                    <div className="age">Age : {item.age}</div>
                  </div>
                )
            })
        }
    </div>
  )
}
