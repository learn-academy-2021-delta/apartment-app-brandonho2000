import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from "reactstrap"

class Footer extends Component{
  render(){
    return(
      <>
      <Nav className="nav-links-footer">
        <p>©Brandon Ho</p>
      </Nav>
      <Nav className="nav-links-footer">
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
      </Nav>
</>
    )
  }
}
export default Footer