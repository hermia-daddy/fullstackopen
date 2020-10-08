import React from 'react'
import CountryDetail from './CountryDetail'



const SearchResult = ({ result }) => {
    if (result.length > 10) {
        return (<p>Too many maches,specify another filter</p>)
    }
    else if (result.length < 10 && result.length > 1) {
        return (result.map(c =>
            <div key={c.name}>
                <div>
                    <CountryDetail countryInfo = {c}/>
                </div>
            </div>
        ))
    }
    else if (result.length === 1) {
        return (
            <CountryDetail countryInfo = {result[0]}/>

        )
    }
    return (<div></div>)

}

export default SearchResult