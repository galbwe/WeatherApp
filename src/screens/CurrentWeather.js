import React, {useEffect, useState, } from 'react'
import { ActivityIndicator, View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import {Feather, MaterialIcons} from '@expo/vector-icons'
import { weatherType, getWeatherBackgroundImage } from '../utilities/weatherType'
import { fetchCurrentWeather } from '../utilities/fetchWeatherData'
import { convertKelvinToFarenheit } from '../utilities/temperature'
import { roundToDecimalPlaces } from '../utilities/math'
import { Config } from '../config'

const apiKey = Config.OPENWEATHER_API_KEY

const CurrentWeather = ({navigation}) => {
  const [weather, setWeather] = useState({})
  const [description, setDescription] = useState('')
  const [temp, setTemp] = useState('--')
  const [feelsLike, setFeelsLike] = useState('--')
  const [high, setHigh] = useState('--')
  const [low, setLow] = useState('--')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // TODO: get lat and lng from the device
  const lat = 38.673066
  const lon = -75.1895462

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentWeatherData = await fetchCurrentWeather(lat, lon, apiKey)
        const currentWeatherMain = currentWeatherData.weather[0].main
        const currentWeatherDesc = currentWeatherData.weather[0].description
        const descCapitalized = currentWeatherDesc.charAt(0).toUpperCase() + currentWeatherDesc.slice(1).toLowerCase()
        setWeather(weatherType[currentWeatherMain.toLowerCase()])
        setDescription(descCapitalized)
        setTemp(currentWeatherData.main.temp)
        setFeelsLike(currentWeatherData.main.feels_like)
        setHigh(currentWeatherData.main.temp_max)
        setLow(currentWeatherData.main.temp_min)
      } catch(error) {
        console.error("Could not fetch current weather data")
        console.error(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    if (loading) {
      fetchData()
    }
  }, [])

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={'large'}/>
      </View>      
    )
  } else if (error) {
    // render an error message
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      <MaterialIcons name="error" size={40} color="red" />
      <Text>
        I don't mean to rain on your parade, but we have a problem.
      </Text>
    </View>
  }
  return (
    <SafeAreaView style={styles.wrapper}>
        <ImageBackground
          source={getWeatherBackgroundImage(weather.name)}
          style={styles.background}
        >
          <View style={styles.container}>
            <Feather name={weather.icon} size={100} color='white' />
            <Text style={styles.temp}>{roundToDecimalPlaces(convertKelvinToFarenheit(temp))}</Text>
            <Text style={styles.feels}>Feels like {roundToDecimalPlaces(convertKelvinToFarenheit(feelsLike))}</Text>
            <View style={styles.highLowWrapper}>
              <Text style={styles.highLow}>High: {roundToDecimalPlaces(convertKelvinToFarenheit(high))}</Text>
              <Text style={styles.highLow}>Low: {roundToDecimalPlaces(convertKelvinToFarenheit(low))}</Text>
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
    paddingTop: 40, 
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
    flexDirection: 'row',
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
