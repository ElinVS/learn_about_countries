import React from "react"
import Country from "./Country"

const CountrySelect = ({countries, onCountriesSelect}) => {

    const countriesArray = countries.map((country,index)=>{
        return <option value={index} onCountriesSelect={onCountriesSelect}>{country.name.common}</option>

    })

    const handleChange = (event) => {
        const index = event.target.value
        const selectedCountry = countries[index]
        onCountriesSelect((selectedCountry))

    }

    return(
        <>
            <form onChange={handleChange}>
                <label for="country"></label>
                <select name="country">
                <option value="" selected> Choose a Country</option>
                    {countriesArray}
                </select>
            </form>

        </>
    )
}




export default CountrySelect