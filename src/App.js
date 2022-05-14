import React from "react"
import './App.css';
import CountriesContainer from "./containers/CountriesContainer";

function App() {
  return (
    <>
      <header>
      <h2>1. Select A Country From The Drop Down Menu</h2>
      <h2>2. Flip The Flag To Learn More About The Country</h2>
      </header>
      <CountriesContainer></CountriesContainer>
    </>
  );
}

export default App;
