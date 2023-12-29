import { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Switch, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType, getWeatherBackgroundImage } from '../utilities/weatherType'
import { 
  convertKelvinToFarenheit, 
  convertKelvinToCelsius,
  convertMetersPerSecondToMilesPerHour, 
  convertMetersToFeet, 
  convertFeetToMiles, 
  convertMetersToKilometers
} from '../utilities/unitConversions'
import { roundToDecimalPlaces } from '../utilities/math'
import { capitalize } from '../utilities/strings'
import { UnitToggle } from '../components/UnitToggle'


const CurrentWeather = ({current, navigation}) => {
  const [metric, setMetric] = useState(false)

  const convertTempUnits = metric ? convertKelvinToCelsius : convertKelvinToFarenheit
  const tempUnit = metric ? 'C': 'F'
  const temp = roundToDecimalPlaces(convertTempUnits(current.main.temp))
  const feelsLike = roundToDecimalPlaces(convertTempUnits(current.main.feels_like))

  const convertWindSpeedUnits = metric ? x => x : convertMetersPerSecondToMilesPerHour
  const windSpeedUnit = metric ? 'm/s' : 'mph'
  const windSpeed = roundToDecimalPlaces(convertWindSpeedUnits(current.wind.speed))

  const convertVisibility = metric ? x => x : convertMetersToFeet
  const convertVisibilitySmallToVisibilityBig = metric ? convertMetersToKilometers : convertFeetToMiles
  const visibilitySmall = convertVisibility(current.visibility)
  const visibilitySmallUnit = metric ? 'm' : 'ft'
  const visibilityBig = roundToDecimalPlaces(convertVisibilitySmallToVisibilityBig(visibilitySmall)) 
  const visibilityBigUnit = metric ? 'km' : 'mi'

  const weather = weatherType[current.weather[0].main.toLowerCase()]
  const description = capitalize(current.weather[0].description)

  return (
    <SafeAreaView style={styles.wrapper}>
        <ImageBackground
          source={getWeatherBackgroundImage(weather.name)}
          style={styles.background}
        >
          <UnitToggle metric={metric} onPress={() => setMetric(!metric)}/>
          <View style={styles.container}>

            <Feather name={weather.icon} size={100} color='white' />
            <Text style={styles.temp}>{temp}&#176;{tempUnit}</Text>
            <Text style={styles.feels}>Feels like {feelsLike}&#176;{tempUnit}</Text>
            <View style={styles.highLowWrapper}>
              <Text style={styles.highLow}>wind: {windSpeed} {windSpeedUnit}</Text>
              {visibilityBig > 0 ? (
                <Text style={styles.highLow}>visibility: {visibilityBig} {visibilityBigUnit}</Text>
              ) : (
                <Text style={styles.highLow}>visibility: {roundToDecimalPlaces(visibilitySmall)} {visibilitySmallUnit}</Text>
              )}
              
            </View>

          </View>
          <View style={styles.bodyWrapper}>
            <Text style={styles.description}>
              {description}
            </Text>
            <Text style={styles.message}>{weather.message}</Text>
          </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight || 0,
  },
  background: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  bodyWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 25,
    paddingBottom: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  temp: {
    color: 'white',
    fontSize: 48,
  },
  feels: {
    color: 'white',
    fontSize: 30,
  },
  highLow: {
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
  highLowWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  description: {
    fontSize: 48,
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: 'white',
  },
  message: {
    fontSize: 30,
    color: 'white',
  },
})

export default CurrentWeather
