import React, {useState, useEffect} from "react"

import CountriesFacts from "../components/CountriesFacts"
import CountrySelect from "../components/CountrySelect"

const CountriesContainer = () => {
        const [countries,setCountries] = useState([])
        const [selectedCountry, setSelectedCountry] = useState(null)
        const [favourites, setFavourites] = useState([])
        
        useEffect(()=> {
            getCountries();
          },[])

        const getCountries = function(){
            fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(countries => setCountries(countries))
        }

        const onCountriesSelect = (country) => {
            setSelectedCountry(country)
        }

        const saveFavourite = ((country) => {
       
            const copyFavourite = [...favourites]
            if(copyFavourite.indexOf(country) === -1){
            copyFavourite.push(country)}
            setFavourites(copyFavourite)
            
        })
    
    
        const favouritesArray = favourites.map((country)=>{
            return (
                <>
                 <li>{country.name.common}</li>
                </>
            )
    
        })

    return(
        <>
            <CountrySelect countries={countries}  onCountriesSelect={onCountriesSelect} saveFavourite={saveFavourite}/>

            {selectedCountry ? <CountriesFacts selectedCountry={selectedCountry} /> : null} 

            <ul>Favourite Countries: {favouritesArray}</ul>

        </>
    )

}

export default CountriesContainer
