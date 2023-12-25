export const weatherType = {
    thunderstorm: {
        name: 'thunderStorm',
        icon: 'zap',
        message: 'It could get noisy',
    },
    drizzle: {
        name: 'drizzle',
        icon: 'cloud-rain',
        message: "It might rain a little",
    },
    rain: {
        name: 'rain',
        icon: 'umbrella',
        message: 'You will need an umbrella',
    },
    snow: {
        name: 'snow',
        icon: 'cloud-snow',
        message: 'Let\'s build a snowman',
    },
    clear: {
        name: 'clear',
        icon: 'sun',
        message: 'It is perfect t-shirt weather',
    },
    clouds: {
        name: 'clouds',
        icon: 'cloud',
        message: 'You could live in the clouds',
    },
    haze: {
        name: 'haze',
        icon: 'wind',
        message: 'It might be a bit damp',
    },
    mist: {
        name: 'mist',
        icon: 'align-justify',
        message: 'It might be hard to see',
    },
}

export const getWeatherBackgroundImage = (weatherName) => {
    switch (weatherName) {
      case weatherType.thunderstorm.name:
        return require("../../assets/thunderstorm.jpeg")
      case weatherType.drizzle.name:
        return require("../../assets/drizzle.jpeg")
      case weatherType.rain.name:
        return require("../../assets/rain.jpeg")
      case weatherType.snow.name:
        return require("../../assets/snow.jpeg")
      case weatherType.clear.name:
        return require("../../assets/clear.jpeg")
      case weatherType.clouds.name:
        return require("../../assets/clouds.jpeg")
      case weatherType.haze.name:
        return require("../../assets/haze.jpeg")
      case weatherType.mist.name:
        return require("../../assets/mist.jpeg")
    }
  }
