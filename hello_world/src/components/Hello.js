// define what we want the function to do 
import React from 'react';

const Hello = () => {

        const name = "Peace"
    return (
        <div className="blue">
        <h1>Hello from the component!</h1>
        <p>Isn't React great?</p>
        <p> My  name is {name}!</p>
        </div>
    );

}

export default Hello;
// file name should match the function name