import React from 'react';

export default class Confirmation extends React.Component {
    
    render() {
        return (

        <div>
            <p>
                Ally will notify your contacts when you text your safe word.  There is nothing else you would need to do.
            </p>

            <button
                    type="submit"
            >
                    
                    {/* // <Link to="Allybutton">Done</Link> > */}
            </button>
        </div>
        )
    }
}