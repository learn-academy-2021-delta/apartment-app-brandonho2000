import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    console.log("logged_in:", this.props.logged_in)
    console.log("user:", this.props.current_user)
    console.log("sign up:", this.props.new_user_route)
    console.log("sign in:", this.props.sign_in_route)
    console.log("sign out:", this.props.sign_out_route)
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route
      } = this.props
    return (
      <header>
        <NavLink to="/">
          <h1>logo goes here</h1>
          <h4>Home</h4>
        </NavLink>
        <div className="nav-links">
          {/* <ul>
            <li>Apartment Index</li>
          </ul> */}
          {!logged_in && 
            <>
              <ul>
                <a href={new_user_route}>Sign Up</a>
              </ul>
              <ul>
                <a href={sign_in_route}>Sign In</a>
              </ul>
            </>
          }

          {logged_in &&
          <ul>
              <a href={sign_out_route}>Sign Out</a>
              </ul>
          }
        </div>
      </header>

     
    );
  }
}
export default Header;
