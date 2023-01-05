import { View, Text,StyleSheet } from 'react-native'
import React from 'react'


const Summery = ({route}) => {

  // let location=[]
  // location.push=route.params
  return (
    <View style={styles.car} >
      <Text style={{color:'blue',fontWeight:'bold'}} >Summry Screen</Text>
      {/* <Text style={styles.carname} >{location}</Text> */}
      <Text>Lattitude Of Destination:{route.params.latitude}</Text>
      <Text>Longitude Of Destination:{route.params.longitude}</Text>
      <Text>Car That User Select: {route.params.carname}</Text>
      <Text>Longitude Of Current Location:{route.params.logi}</Text>
      <Text>Lattitude Of Current Location:{route.params.latt}</Text>
   
      {/* <Text>{route.params.e}</Text> */}
      {/* <Text>{location}</Text> */}
    </View>
  )
}




const styles = StyleSheet.create({
  car: {
      width: '100%',
      height: '70%',
      fontSize:'20px',
      backgroundColor:'gray'
      
  },

})

export default Summery