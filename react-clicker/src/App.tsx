import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContentComponent from './components/content-component/content.component';
import HeaderComponent from './components/header-component/header.component';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ContentComponent />
    </div>
  );
}

export default App;
