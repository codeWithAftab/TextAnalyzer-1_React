import React, { useState } from 'react'
import logo from '../logo.svg';
export const Navbar = (props) => {
  // const [darkWorld,setDarkWorld] = useState();
  
  return (
    <nav className={`navbar navbar-expand-lg text-${props.isDark=== true ?"light":"dark"} bg-${props.isDark=== true ?"dark":"warning"}`}>
      <div className="container">
        <a className={`navbar-brand mt-1 h1 text-${props.isDark=== true ?"light":"dark"}`} href="">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="form-check form-switch">
          <input className="form-check-input" onChange={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label h6" htmlFor="flexSwitchCheckDefault">{props.darkWorld}</label>
        </div>
      </div>
    </nav>
  )
}
