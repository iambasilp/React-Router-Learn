
import React, { useState } from "react";
import { Suspense } from "react";
const MyComponent = React.lazy(()=>{
  return import(/* webpackChunkName:"Section"*/'../components/Section')
})
export const Settings = () => {
  const [state,setState] = useState(false)
  
  return (
    <div>
      {
       state && (
        <Suspense fallback={<div>Loading ....</div>}>
            <MyComponent />
        </Suspense>
       )
      }
      <button onClick={() => {
        setState(true)
      }}>Click here</button>
    </div>
  );
};
