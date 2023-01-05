import { View, Text,StyleSheet,Button} from 'react-native'

import React, { useState,useEffect } from 'react'
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native'
import MapView,{Marker}  from 'react-native-maps';

const Destination = ({route}) => {
  let carname=route.params.e
  let latt=route.params.picuplocation
  let logi=route.params.picuplat
  // alert(latt)
  // alert(logi)
  const [location,setLocation]=useState({
    latitude: 24.8952922,
    longitude: 67.0823298,
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

        // let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
        // setLocation({ ...location, latitude, longitude })
     


        // Location.watchPositionAsync({
        //     distanceInterval: 0.1,
        //     timeInterval: 100,
        // }, (response) => {
        //     const { coords: { latitude, longitude } } = response
        //     setLocation({ ...location, latitude, longitude })
        // })
    
  // //
  //
 })      
  // 
    ();
}, []);



const navigation=useNavigation()
  
  return (
    <View>
     <Text>Select Destination</Text>
    <MapView
                region={location}
                style={styles.map}>

                <Marker
                    coordinate={location}
                  
                />
            </MapView>
            {/* <button } ><Text>Next</Text></button> */}
            <Button onPress={()=>(navigation.navigate('Summary',{latitude:location.latitude,longitude:location.longitude,carname:carname,latt:latt,logi:logi}))}title={'Next'} ></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  map: {
      width: '100%',
      height: '70%',
  },
})
export default Destination