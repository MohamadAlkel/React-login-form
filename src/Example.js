import React, { Component } from 'react';
import  {Button,  Modal, Form} from 'react-bootstrap';
import Login from './Login.js';
import Singup from './Singup.js';



class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }


  
    render() {
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Login
          </Button>
      
          <Modal show={this.state.show} onHide={this.handleClose}>

        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>


        

             



            <Login handleClose={this.handleClose}/>





        </Modal>
          
        </>
      );
    }
}
  
  // render(<Example />);

  export default Example;
