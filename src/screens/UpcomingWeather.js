import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, ActivityIndicator, StatusBar, ImageBackground} from 'react-native'

import ListItem from '../components/ListItem'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    background: {
        flex: 1,
    },
})

const UpcomingWeather = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/upcoming-background.jpeg')} 
                style={styles.background}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
                ListEmptyComponent={() => <ActivityIndicator size="large"/>}
            />
            </ImageBackground>
        </SafeAreaView>
    )
}

const renderItem = ({item}) => {
    return (
        <ListItem
            description={item.weather[0].main}
            datetime={item.dt_txt}
            tempMin={item.main.temp_min}
            tempMax={item.main.temp_max}
        />
    )
}

const DATA = [
    {
        "dt": 1703354400,
        "main": {
            "temp": 281.52,
            "feels_like": 280.06,
            "temp_min": 281.52,
            "temp_max": 282.29,
            "pressure": 1031,
            "sea_level": 1031,
            "grnd_level": 1030,
            "humidity": 68,
            "temp_kf": -0.77
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.47,
            "deg": 146,
            "gust": 3.08
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-12-23 18:00:00"
    },
    {
        "dt": 1703365200,
        "main": {
            "temp": 281.17,
            "feels_like": 279.77,
            "temp_min": 281.17,
            "temp_max": 281.19,
            "pressure": 1031,
            "sea_level": 1031,
            "grnd_level": 1029,
            "humidity": 73,
            "temp_kf": -0.02
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.31,
            "deg": 132,
            "gust": 3.04
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-12-23 21:00:00"
    },
    {
        "dt": 1703376000,
        "main": {
            "temp": 279.98,
            "feels_like": 278.49,
            "temp_min": 279.98,
            "temp_max": 279.98,
            "pressure": 1031,
            "sea_level": 1031,
            "grnd_level": 1030,
            "humidity": 80,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.17,
            "deg": 142,
            "gust": 2.25
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-12-24 00:00:00"
    },
]

export default UpcomingWeather
