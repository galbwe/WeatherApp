import React, {useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import {Feather} from '@expo/vector-icons'
import { weatherType, getWeatherBackgroundImage } from '../utilities/weatherType'

const CurrentWeather = ({navigation}) => {
  const [weather, setWeather] = useState(weatherType.haze)
  return (
    <SafeAreaView style={styles.wrapper}>
        <ImageBackground
          source={getWeatherBackgroundImage(weather.name)}
          style={styles.background}
        >
          <View style={styles.container}>
            <Feather name={weather.icon} size={100} color='white' />
            <Text style={styles.temp}>6</Text>
            <Text style={styles.feels}>Feels like 5</Text>
            <View style={styles.highLowWrapper}>
              <Text style={styles.highLow}>High: 7</Text>
              <Text style={styles.highLow}>Low: 4</Text>
            </View>
          </View>
          <View style={styles.bodyWrapper}>
            <Text style={styles.description}>
              It's Hazy
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
