import React from "react"
import './App.css';
import CountriesContainer from "./containers/CountriesContainer";

function App() {
  return (
    <>
      <header>
      <h2>1. Select a Country from the Drop down menu</h2>
      <h2>2. Flip the flag to learn more about the country</h2>
      </header>
      <CountriesContainer></CountriesContainer>
    </>
  );
}

export default App;
