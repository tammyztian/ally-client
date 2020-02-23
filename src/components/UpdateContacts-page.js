import React from 'react';
import {Route} from 'react-router';


export default class UpdateContacts extends React.Component {
    constructor() {
        super();
        this.state = {
            value:''
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit() {
        alert('Your information has been updated');
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
            <button type="submit" value="submit" onClick={this.handleSubmit}>Update</button>
          </form>
          </div>
        );
      }
    }
