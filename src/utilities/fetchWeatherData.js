export const fetchWeatherForecast = async (lat, lon, apiKey) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    return await makeGetRequest(url)
}

const makeGetRequest = async (url) => {
    console.log(url)
    const response = await fetch(url)
    console.log(response.status)
    if (!response.ok) {
        throw new Error('Http response was not ok')
    }
    return await response.json()    
}
