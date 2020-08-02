// Import the React and ReactDOM Libraries.

import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return "Click on me!";
}

// Create the react component
const App = () => {
    const buttonText = {text: 'Click Me!'};
    const labelText = 'Enter Name';
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style = {{backgroundColor:'blue', color:'white'}}>
                {getButtonText}
            </button>
        </div>
    );
};

// take a react component and take it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);