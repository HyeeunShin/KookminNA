import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';


const MainPolyImg = (props) => {

  const imgUrl = `https://www.assembly.go.kr/static/portal/img/openassm/${props.cd}.jpg`
    return (
      <View>
          <View style={styles.polyFrame}> 
            <Image source={require('../img/kookmin_2.png')} style={styles.polyPhoto} />
          </View>
          <View style = {styles.imgFrame}>
            <Image source={{uri : imgUrl}} style={styles.personImg} />
          </View>
      </View>

      );
}

export default MainPolyImg;

const styles = StyleSheet.create({
  polyPhoto: {
    flex: 1,
    width: "90%",
    height: 130,
  },
  polyFrame: {
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
    left: 20,
    top : '-100%',
    borderWidth: 4,
    borderColor: '#fff'

  },

  imgFrame: {
    width : "100%",
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

  
