import React from 'react';
import {Route} from 'react-router';

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
        if(this.state.password == this.state.confirmPassword) {
            console.log("Go to Next Page");
        }else {
            console.log("Stay in same Page");
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
               
            Your Number :   <input  type="text" name="number" />

        
              
               <br/>
               
                 Password: <input type="text" name="password" min="6" max="25" required value ={this.state.password} 
                 onChange = {this.setPassword}/>
                 <br/>
                 Confirm Password: <input type="text" name="confirm-password" min="6" max="25" required value ={this.state.confirmPassword}
                   onChange = {this.setConfirmPassword}/>
                 <br/>
                 <button onClick = {this.validateInputs} >Button > Assign Contact</button>
             
            </div>

          
         );
     }


 }