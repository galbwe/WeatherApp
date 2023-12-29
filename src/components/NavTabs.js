import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {Feather, Octicons, MaterialCommunityIcons} from '@expo/vector-icons'

import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'
import { useWeatherForecast } from '../hooks/useWeatherForecast'
import { LoadingSpinner } from './LoadingSpinner'

const Tab = createMaterialTopTabNavigator()

const NavTabs = () => {
    // TODO: get this state out of NavTabs and into the App component
    const {current, forecast, city, loading} = useWeatherForecast()
    const [metric, setMetric] = useState(false)

    const toggleUnits = () => setMetric(!metric)

    const CurrentWeatherWrapper = ({navigation}) => {
        return (
            <LoadingSpinner loading={loading}>
                <CurrentWeather 
                    current={current} 
                    navigation={navigation}
                    metric={metric}
                    toggleUnits={toggleUnits}
                />    
            </LoadingSpinner>
        )
    }

    const UpcomingWeatherWrapper = ({navigation}) => {
        return (
            <LoadingSpinner loading={loading}>
                <UpcomingWeather
                    forecast={forecast}
                    city={city}
                    navigation={navigation}
                    metric={metric}
                    toggleUnits={toggleUnits}
                />
            </LoadingSpinner>
        )
    }

    const CityWrapper = ({navigation}) => {
        return (
            <LoadingSpinner loading={loading}>
                <City
                    city={city}
                    loading={loading}
                    navigation={navigation}
                />
            </LoadingSpinner>
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
