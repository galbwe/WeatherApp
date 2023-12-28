import { ActivityIndicator, View } from "react-native"

export const LoadingSpinner = ({loading, children}) => {
    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>      
        )
    }
    return (
        <>
            {children}
        </>
    )
}
