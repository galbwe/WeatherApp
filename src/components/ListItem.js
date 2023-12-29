import {React} from 'react'

import {Text, View, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = ({datetime, temp, unit, description, icon}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.date}>{datetime}</Text>
            <Text style={styles.temp}>{temp}&#176;{unit}</Text>
            <Text style={styles.temp}>{description}</Text>
            <Feather name={icon} size={50} color={'white'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 4,
        marginHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
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

export default ListItem
