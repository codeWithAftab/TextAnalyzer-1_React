import React, { useState } from 'react'

export const Navbar = (props) => {
  
  return (
    <nav className={`navbar  text-${props.isDark=== true ?"light":"dark"} bg-${props.isDark=== true ?"dark":"warning"}`}>
      <div className="container">
        <a className={`navbar-brand mt-1 h4 text-${props.isDark=== true ?"light":"dark"}`} href="/">{props.title} </a>
        {/* <Link className={`navbar-brand mt-1 h4 text-${props.isDark=== true ?"light":"dark"}`} to="/about">about </Link> */}
        
        <div className="form-check form-switch">
          <input className="form-check-input" onChange={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label h6" htmlFor="flexSwitchCheckDefault">{props.darkWorld}</label>
        </div>
      </div>
    </nav>
  )
}
