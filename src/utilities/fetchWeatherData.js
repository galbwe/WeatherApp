export const fetchCurrentWeather = async (lat, lon, apiKey) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Http response was not ok')
    }
    return await response.json()
}

export const fetchWeatherForecast = async (lat, lon, apiKey) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}lon=${lon}&appid=${apiKey}`
    return await fetch(url)
    .then(res => res.json())
    .then(data => data.list)
}
