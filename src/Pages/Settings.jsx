
import React, { useState } from "react";
import { Suspense } from "react";
const MyComponent = React.lazy(()=>{
  return import(/* webpackChunkName:"Section"*/'../components/Section')
})
export const Settings = () => {
  const [state,setState] = useState(false)
  
  return (
    <div style={{textAlign:"center",marginTop:"7rem"}} className="wrapper">
      {
       state && (
        <Suspense fallback={<div>Loading ....</div>}>
            <MyComponent />
        </Suspense>
       )
      }
      <button style={{padding:"1rem 2rem",fontFamily:"sans-serif",fontSize:"1rem", background:"#000080",color:"white",letterSpacing:"1.5px",border:"none",outline:"none"}} onClick={() => {
        setState(true)
      }}>Click here</button>
    </div>
  );
};
