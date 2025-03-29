import React from 'react'
import Logo from "../../assets/argentBankLogo.png"
import { NavLink } from 'react-router-dom'

export const Hearder = () => {
  return (
      <nav class="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
  )
}
