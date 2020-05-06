import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftMenu from './components/LeftMenu';
import MiddleContainer from './components/MiddleContainer';
import FlexWrap from './components/Wrap';
import {Search} from './components/Search';

function App() {
  return (
    <div className="App">
      <Search/>
      <FlexWrap/>
    </div>
  );
}

export default App;
