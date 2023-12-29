import { StyleSheet, View, Text, Switch } from "react-native"

export const UnitToggle = ({metric, onPress}) => {
    return (
        <View style={styles.unitToggle}>
            <Text style={metric ? styles.unitTextInactive : styles.unitTextActive}>imperial</Text>
            <Switch 
            trackColor={{false: 'white', true: 'white'}}
            thumbColor={metric ? 'purple' : 'purple'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onPress}
            value={metric} 
            />
            <Text style={metric ? styles.unitTextActive : styles.unitTextInactive}>metric</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    unitToggle: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomColor: 'rgba(0, 0, 0, 0.8);',
        borderBottomWidth: 1,
      },
      unitTextInactive: {
        color: 'grey',
        fontSize: 18,
      },
      unitTextActive: {
        color: 'white',
        fontSize: 18,
      },
})