import {useState, useEffect} from 'react'

import { fetchWeatherForecast } from '../utilities/fetchWeatherData'
import { getGeolocation } from '../utilities/geolocation'
import { Config } from '../config'

export const useWeatherForecast = () => {
    const [forecast, setForecast] = useState([])
    const [current, setCurrent] = useState({})
    const [city, setCity] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            // prompt user for permission to use device location
            const {lat, lon} = await getGeolocation()
            // make http call
            const data = await fetchWeatherForecast(lat, lon, Config.OPENWEATHER_API_KEY)
            setForecast(data.list)
            setCurrent(data.list[0])
            setCity(data.city)
            setLoading(false)
        })()
    }, [])

    return {forecast, current, city, loading}
}