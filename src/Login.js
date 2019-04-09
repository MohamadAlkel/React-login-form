import React, { Component } from 'react';
import  {Button,  Modal, Form} from 'react-bootstrap';
import Singup from './Singup.js';





class Login extends React.Component {


    constructor(props, context) {
        super(props, context);
        
        this.singup = this.singup.bind(this);
    
        this.state = {
          showConten: true,
          email: "",
          password: ""

        };
      }



    

      whenSubmit = event => {
        event.preventDefault()
        alert(`A email was submitted:  ${this.state.email}
        ${this.state.password}
        ` )
        this.props.handleClose()
      }
    
      singup() {
        this.setState({ showConten: false });
      }

      getEmail=event=> {
          this.setState({email:event.target.value})
      }
      
      getPassword=event=> {
        this.setState({password:event.target.value})
      }  
     

      
      render() {
        const {showConten} = this.state
        console.log(this.state.email)
        console.log(this.state.password)
      return (
        <>
        {showConten ? 
        <div>
            <Modal.Body>        
              <Form >

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control onChange={this.getEmail}  type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={this.getPassword} type="password" placeholder="Password" />
                </Form.Group>

                <p>    New member? <a onClick={this.singup} href="h" >Sign up </a></p>
                {/* <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                
                <Modal.Footer className="hello">
                    <Button variant="primary" className="btLogin"  type="submit" onClick={this.whenSubmit}>
                    Login
                    </Button>

                    <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                    </Button>                   
                    
                </Modal.Footer>

              </Form> 
            </Modal.Body>
         </div>    



             : <Singup handleClose={this.props.handleClose}/>
        }

          
        </>
      );
    }
}
  
  // render(<Example />);

  export default Login;
