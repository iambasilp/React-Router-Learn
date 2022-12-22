import React from 'react'

const MyRouter = ({children}) => {
  const href = window.location.href;
  const obj = new URL(href)
  const path = obj.pathname.substring(1)
  return (
    <div>
      {React.Children.toArray(children).find(child=>child.props.path == path)}
    </div>
  )
}

export default MyRouter
