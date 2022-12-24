import React from 'react'
import { Link } from 'react-router-dom'
export const Notfound = () => {
  return (
    <div>
        <h1>Sorry Page Not Found</h1>
        <Link to="/">Go Home</Link>
    </div>
  )
}
