import React from 'react'
import { NavLink } from 'react-router-dom'

const ActiveLink = ({to, children}) => {
  return (
    <div>
        <NavLink to={to} className={({isActive}) => isActive ? "  text-red-500  rounded-sm font-bold" : "font-bold"} > {children} </NavLink>
    </div>
  )
}

export default ActiveLink