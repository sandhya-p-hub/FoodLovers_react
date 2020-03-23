import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import Customers from "./customers";
import "./App.css";
import image from "./foodLovers.jpg";

const NavBar = ({ user }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navBarid"
      >
        <img src={image} alt="" id="foodlovers"></img>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-link" id="store" to="/movies">
              THE SHOP
            </NavLink>
            <NavLink className="nav-link" id="recipe" to="/recipes">
              RECIPES
            </NavLink>
            <NavLink className="nav-link" id="food" to="/customers">
              FOOD
            </NavLink>
            <NavLink className="nav-link" id="living" to="/rentals">
              LIVING
            </NavLink>
            <NavLink className="nav-link" id="community" to="/rentals">
              COMMUNITY
            </NavLink>

            {!user && (
              <React.Fragment>
                <NavLink className="nav-link" id="login" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" id="register" to="/register">
                  Register
                </NavLink>
              </React.Fragment>
            )}

            {user && (
              <React.Fragment>
                <NavLink className="nav-link" id="username" to="/profile">
                  Hello {user.name}
                </NavLink>
                <NavLink className="nav-link" id="logout" to="/logout">
                  Logout
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
