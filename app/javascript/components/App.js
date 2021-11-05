import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PropTypes from "prop-types";


class App extends Component {
  render() {
    
      
    return (
      
      <Router>
        <Header {...this.props}/> 
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
      
    );
  }
}

export default App;
