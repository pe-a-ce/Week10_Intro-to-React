import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './components/Hello';
import Goodbye from './components/Goodbye';

function App() {

  //const App = () => {} can be susbstited for ^^

  const components = [];
  for (let counter = 0; counter < 10; counter++) {
   components.push(<Hello/>);
    
  }


  return ( 

    // ONLY ONE ELEMENT CAN BE USED so h1 and p have to be wrapped in a div
    // <div>
    // <h1>Hello World</h1>
    // <p>React is awesome</p>
    // </div>

    <>
      {/* <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello /> */}
      {components}
      <Goodbye />
    </>

    
  
  );
}

export default App;
