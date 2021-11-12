import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PropTypes from "prop-types";
import mockApps from "./mockApps";
import ApartmentIndex from "./pages/ApartmentIndex";


class App extends Component {
  constructor(props){
  super(props) 
    this.state = {
      apartment: mockApps
    }
  }

  render() {
    console.log(this.state.apartment)
      
    return (
      
      <>
      <Router>
        <Header {...this.props}/> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/apartmentindex' element={<ApartmentIndex apartments={this.state.apartment}/>} />
        </Routes>
        <Footer />
      </Router>
      </>
    );
  }
}

export default App;
