export const convertKelvinToFarenheit = (kelvin) => {
    return (kelvin - 273.15) * 9 / 5 + 32
}

export const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15
}

export const convertMetersToFeet = (meters) => {
    return meters * 3.28084
}


export const convertFeetToMiles = (feet) => {
    return feet / 5280
}


export const convertMetersToKilometers = (meters) => {
    return meters / 1000
}

export const convertMetersPerSecondToMilesPerHour = (speed) => {
    return speed * 60 * 6.213712e-4
}
