import React, {useState} from 'react'
import {ActivityIndicator, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import NavTabs from './src/components/NavTabs'



const App = () => {
  return (
    <NavigationContainer>
      <NavTabs />
    </NavigationContainer>
  )
//   const [loading, setLoading] = useState(false)
//   if (loading) {
//     return (
//       <View style={{flex: 1, justifyContent: 'center'}}>
//         <ActivityIndicator size={'large'}/>
//       </View>
//     )
//   }
//   return (
//     <NavigationContainer>
//       <NavTabs />
//     </NavigationContainer>
//   )
}

export default App
