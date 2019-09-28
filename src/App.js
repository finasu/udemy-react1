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
  render() {
    return React.createElement(
      "h1",
      null,
      "Hello, React2"
    );
  }
}

export default App;
