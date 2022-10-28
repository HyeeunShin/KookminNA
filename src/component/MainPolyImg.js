import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';


const MainPolyImg = (props) => {
  // var monacd = '14M56632'
  const imgUrl = `https://www.assembly.go.kr/static/portal/img/openassm/${props.cd}.jpg`
    return (
      <View>
          <View style={styles.polyframe}> 
          <Image source={require('../img/kookmin_2.png')} style={styles.polyphoto} />
          </View>
          <View style = {styles.imgframe}>
          <Image source={{uri : imgUrl}} style={styles.personImg} />
          </View>
          

      </View>

      );
}

export default MainPolyImg;

const styles = StyleSheet.create({
  polyphoto: {
    flex: 1,
    width: "90%",
    height: 130,
  },
  polyframe: {
    backgroundColor: "rgba(48, 96, 176, 0.4)",
    opacity: 0.4,
    width : "100%",
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personImg: {
    width: 90,
    height: 90,
    borderRadius: 100,
    position: 'absolute',
    left: 20,
    top : -40
  },
  imgframe: {
    width : "100%",
    height: 50,
  },
});

  
