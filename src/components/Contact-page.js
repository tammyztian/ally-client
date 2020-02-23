import React from 'react';
import { Route } from 'react-router';
import Container from 'react-bootstrap/Container'

export default class Contactpage extends React.Component {
    constructor() {
        super();
        this.state = {
            value:''
        };
        
        /*this.requiredContact = this.requiredContact.bind(this); */
        this.handleSubmit = this.handleSubmit.bind(this); 
      }

      /*requiredContact() {
          if firstName==""
            lastName==""
            phoneNumber==""
          console.log("Contact information is required")
          else
          console.log('Your information has been submitted')
      } */

      handleSubmit() {
        alert('Your information has been submitted');
      }
    
      render() {
        return (
        <div className=''>
           <h1>Contacts</h1>
          <form>
            <label>
              First Name:
              <input type="text"></input>
            </label>
            <br></br>
            <label>
                Last Name:
                <input type="text"></input>
            </label>
            <br></br>
            <label>
                Phone Number:
                <input type='text'></input>
            </label>
            <br></br>

            <label>
              First Name:
              <input type="text"></input>
            </label>
            <br></br>
            <label>
                Last Name:
                <input type="text"></input>
            </label>
            <br></br>
            <label>
                Phone Number:
                <input type='text'></input>
            </label>
            <br></br>
            <button type="submit" value="submit" onClick={this.handleSubmit}>Submit</button>
          </form>
          </div>
        );
      }
    }

    

