import React from 'react'
import logo from '../logo.svg';
export const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container">
    <a className="navbar-brand mt-1 h1" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    </div>
  </div>
</nav>
  )
}
