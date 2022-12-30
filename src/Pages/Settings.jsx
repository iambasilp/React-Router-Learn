
import React from "react";
export const Settings = () => {

  return (
    <div>
      <button onClick={() => {
        import('../utils/Common')
          .then((response)=>{
            console.log(response.testFun());
          })
      }}>Click here</button>
    </div>
  );
};
