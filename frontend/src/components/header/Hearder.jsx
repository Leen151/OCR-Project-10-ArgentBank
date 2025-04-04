import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../store/Actions/UserAction";

import Logo from "../../assets/argentBankLogo.png"

export const Hearder = () => {
  const selectToken = (state) => state.token.token;
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectUser = (state) => state.user.user.body
  const user = useSelector(selectUser)

  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        <div>
          {token ? (
            <div className="main-nav-link">
              <NavLink to="/profil" className="user-profile">
                <i className="fa fa-user-circle"></i>
                {user?.firstName}
              </NavLink>
              <div onClick={logoutUser} className="logout">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                Sign Out
              </div>
            </div>
          ) : (
            <NavLink to={`/login`} >
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
  )
}
