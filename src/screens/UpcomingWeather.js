import { SafeAreaView, StyleSheet, FlatList, ActivityIndicator, StatusBar, ImageBackground, View} from 'react-native'
import { useWeatherForecast } from '../hooks/useWeatherForecast'

import ListItem from '../components/ListItem'


const UpcomingWeather = () => {
    
    const {forecast, city, loading} = useWeatherForecast()

    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/upcoming-background.jpeg')} 
                style={styles.background}>
            <FlatList
                data={forecast}
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
