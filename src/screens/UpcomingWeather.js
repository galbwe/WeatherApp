import { SafeAreaView, StyleSheet, FlatList, ActivityIndicator, StatusBar, ImageBackground, View} from 'react-native'
import { DateTime } from 'luxon'

import ListItem from '../components/ListItem'
import { roundToDecimalPlaces } from '../utilities/math'
import { convertKelvinToFarenheit, convertKelvinToCelsius } from '../utilities/unitConversions'
import { weatherType } from '../utilities/weatherType'
import { UnitToggle } from '../components/UnitToggle'


const UpcomingWeather = ({forecast, city, metric, toggleUnits, navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/upcoming-background.jpeg')} 
                style={styles.background}>
                <UnitToggle metric={metric} onPress={toggleUnits}/>
                <FlatList
                    data={forecast}
                    renderItem={renderItem(city.timezone, metric)}
                    keyExtractor={(item) => item.dt_txt}
                    ListEmptyComponent={() => <ActivityIndicator size="large"/>}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const renderItem = (timezone, metric) => ({item}) => {
    const convertTempUnits = metric ? convertKelvinToCelsius : convertKelvinToFarenheit
    const temp = roundToDecimalPlaces(convertTempUnits(item.main.temp))
    const tempUnit = metric ? 'C' : 'F'

    const weather = weatherType[item.weather[0].main.toLowerCase()]
    const datetime = renderTime(item.dt, timezone)
    return (
        <ListItem
            description={item.weather[0].main}
            datetime={datetime}
            temp={temp}
            unit={tempUnit}
            icon={weather.icon}
        />
    )
}

const renderTime = (seconds, timezoneSeconds) => {
    const dt = DateTime.fromSeconds(seconds)
    const now = DateTime.now()
    if (now.month === dt.month && now.day === dt.day) {
        return 'Today, ' + dt.toLocaleString({hour: 'numeric'})
    } else if (dt.day - now.day === 1) {
        return 'Tomorrow, ' +  dt.toLocaleString({hour: 'numeric'})
    } else {
        return dt.toLocaleString({weekday: 'long', hour: 'numeric'})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    background: {
        flex: 1,
    },
})

export default UpcomingWeather
