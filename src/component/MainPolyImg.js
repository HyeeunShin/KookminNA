import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';


const MainPolyImg = () => {
    return (
      <View>
          <View style={styles.polyframe}> 
          <Image source={require('../img/kookmin_2.png')} style={styles.polyphoto} />
          </View>
          <View style = {styles.imgframe}>
          <Image source={require('../img/han_sohee.jpg')} style={styles.personImg} />
          </View>
          

      </View>

      );
}

export default MainPolyImg;

const styles = StyleSheet.create({
  polyframe: {
    backgroundColor: "rgba(48, 96, 176, 0.4)",
    opacity: 0.4,
    width : "100%",
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgframe: {
    width : "100%",
    height: 50,
  },
  polyphoto: {
    flex: 1,
    width: "80%",
    height: 130,
  },
  personImg: {
    width: 90,
    height: 90,
    borderRadius: 90,
    position: 'absolute',
    left: 20,
    top : -40

  }
});

  
