import {React} from 'react'

import {Text, View, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'


const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'pink',
    },
    temp: {
        color: 'white',
        fontSize: 20,
    },
    date: {
        color: 'white',
        fontSize: 15,
    },
    title: {
        color: 'white',
        fontSize: 20,
        padding: 20,
    },
})


const ListItem = ({description, datetime, tempMin, tempMax}) => {
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'}/>
            <Text style={styles.date}>{datetime}</Text>
            <Text style={styles.temp}>{tempMin}</Text>
            <Text style={styles.temp}>{tempMax}</Text>
        </View>
    )
}


export default ListItem
