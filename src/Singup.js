import React, { Component } from 'react';
import  {Button,  Modal, Form} from 'react-bootstrap';
import Login from './Login.js';
import axios from 'axios';

const patterns={

}

const validateEmail = email => {
  return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
}


class Singup extends React.Component {

    constructor(props, context) {
        super(props, context);

    this.Login = this.Login.bind(this);
    this.getUserName = this.getUserName.bind(this);

        
        this.state={
            showContens: true,
            email: "",
            password: "",
            cpassword: "",
            userName: "" ,
            validated: true,
            validatedP: true,
            statusSignup: ""

        };
    }


    api =()=>  
      axios.post(`https://insta.nextacademy.com/api/v1/users/new`, {
        username: this.state.userName,
        email: this.state.email,
        password: this.state.password
      }).then((response) => {
        this.setState({
            messageSignup: console.log('You have successfully registered! Please proceed to login.'),
            statusSignup: true,
        })
        console.log(response.data); // now the data is accessable from here.
    }).catch(error => {
        this.setState({
            messageSignup: error.response.data.message,
            statusSignup: false,
        })
        console.log(error.response.data.message)
    })
      
        
      
      .then(response => {
        console.log(response)
      })


    
    Login () {
        this.setState ({showContens: false})
    }

    whenSubmit = event => {
        event.preventDefault()
        // let email = this.state.email;
        // let password = this.state.password;
        // let cpassword = this.state.cpassword;
        // let userName = this.state.userName;

        const { email, password, cpassword, userName } = this.state



        const validatedP = password === cpassword && password && cpassword
        const validated = validateEmail(email) && password && email

        this.setState({ 
          validatedP,
          validated
        })

        if (!email || !password || !cpassword || !userName) {
          alert('Your fields are empty')
        } else if (validatedP && validated) {
          alert(`A email was submitted:  ${email}
          ${password}
          ${cpassword} !=
          ${userName}
          
          ` )
          this.setState ({validated: true}) 
          this.props.handleClose()
        }


        // if (!email || !password || !cpassword || !userName ||  !validateEmail(email) || password != cpassword){

          
        //     if(!email || !password || !cpassword || !userName ){
        //       alert(`your fields is empty`)
        //     }
        //     if (!validateEmail(email)){

        //       this.setState ({validated: false}) 
        //     }
        //     if (password != cpassword)  {
        //       this.setState ({validatedP: false}) 

        //     } else{ this.setState ({validatedP: true})}

        // } else {

        //     alert(`A email was submitted:  ${email}
        //     ${password}
        //     ${cpassword}
        //     ${userName}
            
        //     ` )
        //     this.setState ({validated: true}) 
        //     this.props.handleClose()

        // }
    }


    getEmail=event=> {
        this.setState({email:event.target.value})
    }
    
    getPassword=event=> {
      this.setState({password:event.target.value})
    } 

    getCPassword=event=> {
        this.setState({cpassword:event.target.value})
      } 

    getUserName=event=> {
        this.setState({userName:event.target.value})
      } 
  

    
    render() {


        const {showContens}= this.state
        const {validated}= this.state
        const {validatedP}= this.state
        const {statusSignup}= this.state

         console.log(this.state.userName)
      return (
        <>
          
         {showContens?
         <div>
          <Modal.Body>        
              <Form>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control onChange={this.getEmail} type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  <Form.Text className={`textRed ${validated? "valid" : ""}`} >
                    Please enter valid email.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control onChange={this.getUserName} onError={"gbfdg"}  type="password" placeholder="Enter your Name" />
                  <Form.Text className={`textRed ${validated? "valid" : ""}`} >
                    Please enter valid user name.
                  </Form.Text>
                </Form.Group>


                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control  onChange={this.getPassword} type="password" placeholder="Password" />
                  <Form.Text className={`textRed ${validatedP? "valid" : ""}`} >
                    enter same.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>confirm Password</Form.Label>
                  <Form.Control  onChange={this.getCPassword} type="password" placeholder="Password" />
                  <Form.Text className={`textRed ${validatedP? "valid" : ""}`} >
                    enter same.
                  </Form.Text>
                </Form.Group>


                <p className={` ${statusSignup? "valid" : ""}`}>    {this.state.messageSignup}</p>
                <p >    {this.state.messageSignup}</p>

                <p>    I am member? <a onClick={this.Login} href="g">Log in</a></p>
                {/* <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                
                <Modal.Footer className="hello">
                    <Button variant="primary" className="btLogin" type="submit" onClick={this.whenSubmit}>
                    Signup 
                    </Button>

                    <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                    </Button> 
                    
                </Modal.Footer>

              </Form> 
            </Modal.Body>
            </div>  

            : <Login handleClose={this.props.handleClose}/>
            }           
          
        </>
      );
    }
}
  
  // render(<Example />);

  export default Singup;




  
