import {React} from 'react'
import { ActivityIndicator, SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import IconText from '../components/IconText'

import {DateTime} from 'luxon'

const City = ({city, navigation}) => {
    const sunrise = DateTime.fromSeconds(city.sunrise).toLocaleString(DateTime.TIME_SIMPLE)
    const sunset = DateTime.fromSeconds(city.sunset).toLocaleString(DateTime.TIME_SIMPLE)
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../../assets/city-background.jpeg")} 
                style={styles.image}
            >
                <View style={styles.background}>
                    <Text style={[styles.cityText, styles.cityName]}>{city.name}</Text>
                    <Text style={[styles.cityText, styles.countryName]}>{city.country}</Text>
                    <View style={styles.populationWrapper}>
                        <IconText 
                            text={city.population} 
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
    image: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingVertical: 40,
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
        color: 'white',
        fontWeight: 'bold',
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
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
        color: 'white',
        fontWeight: 'bold',
    },
})

export default City
