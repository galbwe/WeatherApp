import {React } from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import IconText from '../components/IconText'



const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../../assets/city-background.jpeg")} 
                style={styles.background}
            >
                <Text style={[styles.cityText, styles.cityName]}>New York</Text>
                <Text style={[styles.cityText, styles.countryName]}>USA</Text>
                <View style={styles.populationWrapper}>
                    <IconText 
                        text={'7.9 million'} 
                        icon={'user'} 
                        iconSize={50} 
                        style={styles.populationText}
                    />
                </View>
                <View style={styles.riseSetWrapper}>
                    <IconText 
                        text={'6:46:58am'} 
                        icon={'sunrise'} 
                        iconSize={50} 
                        style={styles.riseSetText}
                    />
                    <IconText 
                        text={'8:12:23pm'} 
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