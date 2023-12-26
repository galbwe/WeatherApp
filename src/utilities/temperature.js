export const convertKelvinToFarenheit = (kelvin) => {
    return (kelvin - 273.15) * 9 / 5 + 32
}

export const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15
}
