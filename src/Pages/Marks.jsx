import React from 'react'
import { useOutletContext } from 'react-router'
export const Marks = () => {
    const {Marks} = useOutletContext()
  return (
    <div>Marks</div>
  )
}
