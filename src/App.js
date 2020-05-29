import React from 'react';
import './App.css';
// import _variableOfFunction_ from _pathToFunction_
import Header from './my_files/Header';
import Technologies from './my_files/Technologies'
import Footer from './my_files/Footer'

const App = () => {
  // This is not HTML, this is JSX
  return (
    <div className="App">
      <Header/>
      <Technologies/>
      <Footer/>
    </div>
  );
}

export default App;