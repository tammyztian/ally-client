import React from 'react';
import './AllyButton.css';
import Button from 'react-bootstrap/Button'

export default class AllyButton extends React.Component {
//Emergency button
    render() {
        return (
            <div >
                <div className="ally-button" onclick="HelpMe">
                    HelpMe
                </div>

                {/* <style jsx>{`
                    .ally-button {
                        background-color:red;
                        color: blue;
                        cursor: pointer;
                        height: 500px;
                        width: 500px;
                        
                    }
                    `}</style> */}
            </div>
        );
    }
}