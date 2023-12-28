import React from 'react'
import {StyleSheet} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {Feather, Octicons, MaterialCommunityIcons} from '@expo/vector-icons'

import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'
import { useWeatherForecast } from '../hooks/useWeatherForecast'

const Tab = createMaterialTopTabNavigator()

const NavTabs = () => {
    const {current, forecast, city, loading} = useWeatherForecast()

    const CurrentWeatherWrapper = ({navigation}) => {
        return (
            <CurrentWeather 
                current={current} 
                loading={loading} 
                navigation={navigation}
            />    
        )
    }

    const UpcomingWeatherWrapper = ({navigation}) => {
        return (
            <UpcomingWeather
                forecast={forecast}
                city={city}
                loading={loading}
                navigation={navigation}
            />
        )
    }

    const CityWrapper = ({navigation}) => {
        return (
            <City
                city={city}
                loading={loading}
                navigation={navigation}
            />
        )
    }

    return (
        <Tab.Navigator
            tabBarPosition='bottom'
            screenOptions={{
                tabBarActiveTintColor: styles.tabActive.color,
                tabBarInactiveTintColor: styles.tabInactive.color,
            }}
        >
            <Tab.Screen
            name="Current"
            component={CurrentWeatherWrapper}
            options={{
                tabBarIcon: ({focused}) => {
                return (
                    <Feather name='droplet' size={24} color={getTabIconColor(focused)} />
                )
                },
            }}
            />
            <Tab.Screen
            name="Forecast"
            component={UpcomingWeatherWrapper}
            options={{
                tabBarIcon: ({focused}) => {
                return (
                    <Octicons name='graph' size={24} color={getTabIconColor(focused)} />
                )
                }
            }}
            />
            <Tab.Screen
            name="City"
            component={CityWrapper}
            options={{
                tabBarIcon: ({focused}) => {
                return (
                    <MaterialCommunityIcons name='city-variant' size={24} color={getTabIconColor(focused)} />
                )
                }
            }}
            />
        </Tab.Navigator> 
    )
   
}

const getTabIconColor = (focused) => {
    return focused ? styles.tabActive.color : styles.tabInactive.color
}



const styles = StyleSheet.create({
    tabActive: {
        color: 'purple',
      },
      tabInactive: {
        color: 'grey',
      },
})

export default NavTabs
