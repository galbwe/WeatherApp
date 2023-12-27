import * as Location from 'expo-location'


export const getGeolocation = async () => {
    // request user's permission to access location
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('No permission to access device location.')
    }
    // get user's location from the device
    let location = await Location.getCurrentPositionAsync({});
    return {lat: location.coords.latitude, lon: location.coords.longitude}
  }
