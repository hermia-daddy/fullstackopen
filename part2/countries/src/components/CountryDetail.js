import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetail = ({ countryInfo }) => {
    const [isShow, setIsShow] = useState(false)
    const [cityWeather, setCityWeather] = useState({
        current: {
        temperature: 16,
        weather_icons: [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
        ],
        wind_speed: 0,
        wind_dir: "SW"
        }
        })

    const showCountryDetail = (event) => {
        setIsShow(!isShow)
        console.log('show clieck event:', event);
    }

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=a651c7efbe45c71c129ae8402e6e3d38&query=${countryInfo.capital}`)
            .then((response) => {
                console.log('weatherData:',response.data)
                setCityWeather(response.data)
            })
    }, [])
    console.log("cityWeather:",cityWeather)
    return (
        <div>
            <p >{countryInfo.name}<button onClick={showCountryDetail}>show</button></p>
            <div style={{ display: isShow ? 'block' : 'none' }}>
                <h1>{countryInfo.name}</h1>
                <p>capital {countryInfo.capital}</p>
                <p>population {countryInfo.population}</p>
                <h2>languages</h2>
                <ul>
                    {countryInfo.languages.map(l => <li key={l.name} >{l.name}</li>)}
                </ul>
                <img src={countryInfo.flag} height='128px' width='128px' />
                <h2>Weather in {countryInfo.capital}</h2>
                <p>temperature:{cityWeather.current.temperature} Celcius</p>
                {cityWeather.current.weather_icons.map(wi => <img key={countryInfo.name} src={wi} height='64px' width='64px' />)}
                <p>wind:{cityWeather.current.wind_speed} mph direction {cityWeather.current.wind_dir}</p>
            </div>
        </div>
    )
}

export default CountryDetail