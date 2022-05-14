import React from "react"

const CountriesFacts = ({selectedCountry}) => {

    return(
        <>
            <img  id="flag-img" src={selectedCountry.flags.png} alt='flag'/>  
            <li>Capital: {selectedCountry.capital}</li>   
            <li>Continent: {selectedCountry.continents}</li> 
            <li>Population: {selectedCountry.population}</li>
        </>
    )
}

export default CountriesFacts