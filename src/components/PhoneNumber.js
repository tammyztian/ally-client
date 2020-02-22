import React from 'react';
import {Route} from 'react-router';


export default class PhoneNumber extends React.Component {
    
  
    render() {
        return (
            <div className="number">
               
             Your Number :   <input  type="text" name="number" />
              
                <br/>

                <button>Button > password</button>
               
            </div>
        );
    }
}