// eslint-disable-next-line
import React from 'react';
import './assets/css/App.css';
import SearchBar from './Components/SearchBar';
import dataSet from "./DataSet.json"

function App() {
  return (
    <div className="App">
      <SearchBar placeHolder="Type de tournage, annee de tournage, arrondissement" data={dataSet}></SearchBar>
    </div>
  );
}

export default App;
