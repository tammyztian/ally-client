import React from 'react';
import {Route} from 'react-router';
import '../index.css';



export default class Password extends React.Component {

    constructor(){
        super();
        this.validateInputs = this.validateInputs.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setConfirmPassword = this.setConfirmPassword.bind(this);

        this.state = {
            password : "",
            confirmPassword : "",
        }
    }


    
    validateInputs(){
        if(this.state.password === this.state.confirmPassword) {
            console.log("Go to Next Page");
        }else {
            console.log("Stay in same Page");
        }

        if (this.state.password === "") {
            console.log("need password")
        }

        if (this.state.confirmPassword === "") {
            console.log("need to confirm password")
        }

        if (this.state.password > 6 ){
            console.log('pw need to be longer than 6 character')
        }

    }

    setPassword(e){
        this.setState({password : e.target.value});
    }

    setConfirmPassword(e){
        this.setState({confirmPassword : e.target.value});
    }

     render() {
         return (

            <div className="sign-up">
            <p> Your Number:   <input  type="text" name="number" /></p><br/>

            <p> Password: <input type="text" name="password" min={6} required value ={this.state.password} 
              onChange = {this.setPassword}/></p><br/>

             <p>Confirm Password: <input type="text" name="confirm-password" min={6} required value ={this.state.confirmPassword}
                onChange = {this.setConfirmPassword}/></p><br/>
              
             <button onClick = {this.validateInputs} >Button > Assign Contact</button>
          
         </div> 
         );
     }
 }