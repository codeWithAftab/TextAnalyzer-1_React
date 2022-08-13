import React, { useState } from 'react'
import logo from '../logo.svg';
import {
  Link
} from "react-router-dom";
export const Navbar = (props) => {
  
  return (
    <nav className={`navbar  text-${props.isDark=== true ?"light":"dark"} bg-${props.isDark=== true ?"dark":"warning"}`}>
      <div className="container">
        <Link className={`navbar-brand mt-1 h4 text-${props.isDark=== true ?"light":"dark"}`} to="/">{props.title} </Link>
        {/* <Link className={`navbar-brand mt-1 h4 text-${props.isDark=== true ?"light":"dark"}`} to="/about">about </Link> */}
        
        <div className="form-check form-switch">
          <input className="form-check-input" onChange={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label h6" htmlFor="flexSwitchCheckDefault">{props.darkWorld}</label>
        </div>
      </div>
    </nav>
  )
}
