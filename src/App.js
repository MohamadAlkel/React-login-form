import  {Navbar,  Nav} from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import Example from './Example.js';
import { Route, Link } from "react-router-dom";
import Login from './Login.js';




import Logo from './img/f.png'
// import Button from 'react-bootstrap/Button';
class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: false,
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div >

      <Navbar bg="light" expand="lg">
        <img src={Logo} />
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="hi" id="basic-navbar-nav">
          <Nav className=" ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          

            

            
            <Link to="/login"><Example/></Link>          
          </Nav>
        </Navbar.Collapse>
      </Navbar>


          

      </div>
    );
  }
}

export default App;
