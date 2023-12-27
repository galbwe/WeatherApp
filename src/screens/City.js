import {React, useState, useEffect} from 'react'
import { ActivityIndicator, SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import IconText from '../components/IconText'
import { getGeolocation } from '../utilities/geolocation'
import { fetchCityData } from '../utilities/fetchWeatherData'
import { Config } from '../config'

const City = () => {
    const [loading, setLoading] = useState(true)
    const [cityData, setCityData] = useState(null)

    useEffect(() => {
        (
            async () => {
                const {lat, lon} = await getGeolocation()
                const data = await fetchCityData(lat, lon, Config.OPENWEATHER_API_KEY)
                setCityData(data)
                setLoading(false)
            }
        )()
        
    }, [])

    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>      
        )
    }

    const {sunrise, sunset, population, country, name: city, timezone} = cityData
    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../../assets/city-background.jpeg")} 
                style={styles.background}
            >
                <Text style={[styles.cityText, styles.cityName]}>{city}</Text>
                <Text style={[styles.cityText, styles.countryName]}>{country}</Text>
                <View style={styles.populationWrapper}>
                    <IconText 
                        text={population} 
                        icon={'user'} 
                        iconSize={50} 
                        style={styles.populationText}
                    />
                </View>
                <View style={styles.riseSetWrapper}>
                    <IconText 
                        text={sunrise} 
                        icon={'sunrise'} 
                        iconSize={50} 
                        style={styles.riseSetText}
                    />
                    <IconText 
                        text={sunset} 
                        icon={'sunset'} 
                        iconSize={50} 
                        style={styles.riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    background: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    populationWrapper: {
        flexDirection: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'yellow',
        fontWeight: 'bold',
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'purple',
        fontWeight: 'bold',
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30,

    },
    riseSetText: {
        fontSize: 20,
        color: 'purple',
        fontWeight: 'bold',
    },
})

export default City