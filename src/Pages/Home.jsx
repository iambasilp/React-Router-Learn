import React from 'react'
import testObj, {testFun} from '../utils/Common'
export const Home = () => {
  console.log(testObj);
  return (
    <div className="wrapper">
      <div>
        <h1 style={{textAlign:"center",marginTop:"7rem"}}>Home</h1>
      </div>
    </div>
  )
}
