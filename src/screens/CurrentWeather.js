import { ActivityIndicator, View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType, getWeatherBackgroundImage } from '../utilities/weatherType'
import { convertKelvinToFarenheit } from '../utilities/temperature'
import { roundToDecimalPlaces } from '../utilities/math'
import { capitalize } from '../utilities/strings'

const CurrentWeather = ({current, loading, navigation}) => {

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={'large'}/>
      </View>      
    )
  }

  // TODO: add the option to display temperatures in Celsius
  const temp = roundToDecimalPlaces(convertKelvinToFarenheit(current.main.temp))
  const feelsLike = roundToDecimalPlaces(convertKelvinToFarenheit(current.main.feels_like))
  const high = roundToDecimalPlaces(convertKelvinToFarenheit(current.main.temp_max))
  const low = roundToDecimalPlaces(convertKelvinToFarenheit(current.main.temp_min))
  const weather = weatherType[current.weather[0].main.toLowerCase()]
  const description = capitalize(current.weather[0].description)

  return (
    <SafeAreaView style={styles.wrapper}>
        <ImageBackground
          source={getWeatherBackgroundImage(weather.name)}
          style={styles.background}
        >
          <View style={styles.container}>
            <Feather name={weather.icon} size={100} color='white' />
            <Text style={styles.temp}>{temp}</Text>
            <Text style={styles.feels}>Feels like {feelsLike}</Text>
            <View style={styles.highLowWrapper}>
              <Text style={styles.highLow}>High: {high}</Text>
              <Text style={styles.highLow}>Low: {low}</Text>
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
