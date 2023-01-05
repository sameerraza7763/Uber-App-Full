import { View, Text,TouchableOpacity, StyleSheet  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import MapView,{Marker}  from 'react-native-maps';
import * as Location from 'expo-location';

// import * as Location from 'expo-location'

const Picup = () => {
  const [location,setLocation]=useState({
    latitude: 24.8979852922,
    longitude: 67.0829873298,
    latitudeDelta: 0.0007,
    longitudeDelta: 0.0007,
  })
  const [errorMsg, setErrorMsg] = useState(null)
  useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
        setLocation({ ...location, latitude, longitude })


        Location.watchPositionAsync({
            distanceInterval: 0.1,
            timeInterval: 100,
        }, (response) => {
            const { coords: { latitude, longitude } } = response
            setLocation({ ...location, latitude, longitude })
        })
    
  //
  })      
  // 
    ();
}, []);

console.log('location --->', location)
  
    const navigation=useNavigation()
  return (
    <View>
      <Text>Pickup Screen</Text>


<MapView
                region={location}
                style={styles.map}>

                <Marker
                    coordinate={location}
                    // title={'Stadium'}
                    description={Location.title}
                />
            </MapView>





        {/* <TouchableOpacity onPress={()=>(navigation.navigate('Destination',location))} ><Text>Destination</Text></TouchableOpacity> */}
        <TouchableOpacity onPress={()=>(navigation.navigate('Car Selection',{Picuplat:location.latitude,Picuplon:location.longitude}))} ><Text>Car Selection</Text></TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>(navigation.navigate('Summary'))} ><Text>Summry</Text></TouchableOpacity> */}
        </View>
  )
}


const styles = StyleSheet.create({
  map: {
      width: '100%',
      height: '70%',
  },
})
export default Picup