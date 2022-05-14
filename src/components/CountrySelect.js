import React from "react"


const CountrySelect = ({countries, onCountriesSelect, saveFavourite}) => {

    const countriesArray = countries.map((country,index)=>{
        return <option value={index} onCountriesSelect={onCountriesSelect}saveFavourite={saveFavourite}>{country.name.common} </option>
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
                <select className="drop-down"  name="country">
                <option value="" selected> Choose a Country</option>
                    {countriesArray}
                </select>
            </form>
            
        </>
    )
}




export default CountrySelect