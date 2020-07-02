import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Salesdash from './components/Salesdash'
import Main from './components/Main'

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
     
        <Main/>
      </React.Fragment>
 
    )
  }
}

export default App;
