import {React} from 'react'
import {Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

styles = StyleSheet.create({
    text: {
        'color': 'white',
        'fontWeight': 'bold',
    }
})

const IconText = ({text, icon, iconSize, iconColor, style}) => {
    return (
        <>
            <Feather 
                name={icon} 
                size={iconSize} 
                color={getIconColor(iconColor, style, styles.text)}
            />
            <Text style={getTextStyle(style, styles.text)}>
                {text}
            </Text>
        </>
    )
}

const getIconColor = (iconColor, style, defaultStyle) => {
    if (iconColor != undefined) {
        return iconColor
    } else if (style != undefined && style.color != undefined) {
        return style.color
    } else {
        return defaultStyle.color
    }
}


const getTextStyle = (style, defaultStyles) => {
    if (style === undefined) {
        return defaultStyles
    }
    return [defaultStyles, style]
}

export default IconText