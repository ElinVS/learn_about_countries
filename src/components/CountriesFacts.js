import React from "react"

const CountriesFacts = ({selectedCountry, saveFavourite}) => {

    const handleButton = function() {
        saveFavourite(selectedCountry)
           
    }

    return(
        <>
            <div className="big-container">
                <div className="container">

                <div className="front center">
                <img  id="flag-img" src={selectedCountry.flags.svg} alt='flag'/>
                </div>
            
                
                <div className="back center"  >
                    <h1>{selectedCountry.name.common}</h1>
                    <li>Capital: {selectedCountry.capital}</li>   
                    <li>Continent: {selectedCountry.continents}</li> 
                    <li>Subregion: {selectedCountry.subregion}</li> 
                    <li>Population: {selectedCountry.population}</li>  
                    <li>Border Countries: {selectedCountry.borders}</li> 
                    
                    <img  id="arms-img" src={selectedCountry.coatOfArms.svg} alt='coat of arms'/>
                </div> 
                <button onClick={handleButton} > &hearts;</button> 
            </div> 

            

        </div>
        </>
    )
}

export default CountriesFacts