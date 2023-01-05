import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Carselec = ({route}) => {
  let [pickupCar, setPickupCar] = useState("");
  let [selectBtn,setSelectBtn] = useState(false)
  let location=route.params
let picuplocation=route.params.Picuplon
let picuplat=route.params.Picuplat
// alert(picuplocation)
// alert(picuplat)
  const selectCar = (e) => {
    alert(e)
    navigation.navigate('Destination',{e:e,picuplocation:picuplocation,picuplat:picuplat})
  };

  // if (pickupCar.length > 0) {
  //   setSelectBtn(false)
  // }
const navigation=useNavigation()
  return (
    <View>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        Select Your Car{" "}
      </Text>
      <View style={styles.car1}>
        <Image
          source={require("./assets/car1.jpg")}
          style={styles.car}
         
        />
        <Button
          title="Uber X"
          color="#841584"
          
          disabled={selectBtn}
          style={{ marginTop: "4%" }}
          onPress={() => {
            selectCar("Uber X");
          }}
        />
        <Image
          source={require("./assets/car1.jpg")}
          style={styles.car}
         
        />
        <Button
          title="With AC"
          color="#841584"
          
          disabled={selectBtn}
          onPress={() => {
            selectCar("With AC");
          }}
        />
        <Image
          source={require("./assets/car1.jpg")}
          style={styles.car}
          onPress={() => {
             selectCar("Uber-X");
          }}
        />

        <Button
          title="Without AC"
          color="#841584"
          
          disabled={selectBtn}
          style={{ marginTop: "4%" }}
          onPress={() => {
            selectCar("Without AC");
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  car1: {
    height: "30%",
    width: "70%",
    marginTop: "5%",
    marginLeft: "15%",
  },
  car: {
    width: "100%",
    marginTop: "2%",
  },
});

export default Carselec;
