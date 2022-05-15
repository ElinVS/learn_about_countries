import React, {useState, useEffect} from "react"

import CountriesFacts from "../components/CountriesFacts"
import CountrySelect from "../components/CountrySelect"

const CountriesContainer = () => {
        const [countries,setCountries] = useState([])
        const [selectedCountry, setSelectedCountry] = useState(null)
       
        
        
        
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


    return(
        <>
            <CountrySelect countries={countries}  onCountriesSelect={onCountriesSelect} />

            {selectedCountry ? <CountriesFacts selectedCountry={selectedCountry} /> : null} 

        </>
    )

}

export default CountriesContainer
