import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchResult from './components/SearchResult'



const App = () => {

    const [searchWord, setSearchWord] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                setCountries(response.data)
                console.log('countries:', response.data);
            })
    }, [])

    const handleSearchWordChange = (event) => {
        if(event.target.value){
            console.log('searchWord', event.target.value);
            setSearchWord(event.target.value)
            const searchedCountries = countries.filter(c => c.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
            setSearchResult(searchedCountries)
        }
        else{
            setSearchWord('')
            setSearchResult([])
        }
    }

    return (
        <div>
            find countries <input onChange={handleSearchWordChange} value={searchWord} />
            <SearchResult result = {searchResult}/>
        </div>
    )
}

export default App