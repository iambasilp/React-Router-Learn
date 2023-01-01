import React from 'react'
import testObj from '../utils/Common'
const Section = () => {
    console.log(testObj);
  return (
    <div>
      <h1 style={{backgroundColor:"blue",color:"white",padding:"3rem", marginBottom:"2rem", textTransform:"capitalize"}}>This is Dynamically Imported Section </h1>
    </div>
  )
}

export default Section