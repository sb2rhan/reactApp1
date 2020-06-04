import React from 'react';
import './App.css';
// import _variableOfFunction_ from _pathToFunction_
import Header from './my_components/Header/Header';
import Navbar from './my_components/Navbar/Navbar';
import Profile from './my_components/Profile/Profile';
import Footer from './my_components/Footer/Footer';

const App = () => {
  // This is not HTML, this is JSX
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;