import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import minimal from "../assets/minimal.png";
import { Col, Row } from "reactstrap";

class Header extends Component {
  render() {
    console.log("logged_in:", this.props.logged_in);
    console.log("user:", this.props.current_user);
    console.log("sign up:", this.props.new_user_route);
    console.log("sign in:", this.props.sign_in_route);
    console.log("sign out:", this.props.sign_out_route);
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <Row>
        <header className='row'>
          <Col className="md-6">
            <NavLink to="/">
              <img src={minimal} alt="logo" className="app-logo" />
            </NavLink>
          </Col>
          <Col className="md-6">
            <div className="nav-links-header">
              <ul>
                <NavLink to="/ApartmentIndex">Apartments</NavLink>
              </ul>
              <ul>
                {logged_in && (
                  <a href={sign_out_route} className="nav-link">
                    Sign Out
                  </a>
                )}
                {!logged_in && (
                  <a href={sign_in_route} className="nav-link">
                    Sign In
                  </a>
                )}
              </ul>
              <ul>
                {!logged_in && (
                  <a href={new_user_route} className="nav-link">
                    Sign Up
                  </a>
                )}
              </ul>
            </div>
          </Col>
        </header>
      </Row>
    );
  }
}
export default Header;
