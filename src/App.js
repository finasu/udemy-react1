// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>
//       Hello React
//     </div>
//   );
// }

// class App extends Component {
//   render(){
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("clickclick")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    {name: "Yuki", age: 31},
    {name: "Saya", age: 30},
    {name: "Saki", age: 2}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi! {props.name} {props.age}</div>
}

User.defaultProps = {
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
