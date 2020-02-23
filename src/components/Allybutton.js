
import React from 'react';
import './AllyButton.css';
import Button from 'react-bootstrap/Button'

export default class AllyButton extends React.Component {//Emergency button
    render() {
        return (
             <div >
                           <div className="ally-button" onclick="HelpMe">
                               HelpMe
                           </div>
                       </div>
        );
    }
}