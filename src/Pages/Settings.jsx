
import React, { useState } from "react";
export const Settings = () => {
  const [module,setModule]  = useState({})
  const Comp = module.default || React.Fragment
  return (
    <div>
      <Comp/>
      <button onClick={() => {
        import('../components/Section')
          .then((response)=>{
            setModule(response)
          })
      }}>Click here</button>
    </div>
  );
};
