import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import data from './data';
import {useState} from 'react';

function App() {
  const {banners, courses} = data;
  return (
    <div className="App">
      <Header></Header>
      <Main banners={banners} courses={courses}></Main>
    </div>
  );
}

export default App;
