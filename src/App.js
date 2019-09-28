import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>
//       Hello React
//     </div>
//   );
// }

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("clickclick")}} />
      </React.Fragment>
    )
  }
}

export default App;
