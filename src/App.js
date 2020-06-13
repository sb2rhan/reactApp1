import React from 'react';
import './App.css';
// import _variableOfFunction_ from _pathToFunction_
import Header from './my_components/Header/Header';
import Navbar from './my_components/Navbar/Navbar';
import Profile from './my_components/Profile/Profile';
import Footer from './my_components/Footer/Footer';
import Dialogs from './my_components/Dialogs/Dialogs';
import News from './my_components/News/News';
import Music from './my_components/Music/Music';
import Settings from './my_components/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  // This is not HTML, this is JSX
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;