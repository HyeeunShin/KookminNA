import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

const MainPolyImg = (props) => {

  const poly = {
     '국민의힘' : require('../../src/assets/picture/국민의힘.png'),
     '더불어민주당' : require('../assets/picture/더불어민주당.png'),
     '무소속' : require('../assets/picture/무소속.png'),
     '기본소득당' : require('../assets/picture/기본소득당.png'),
     '정의당' : require('../assets/picture/정의당.png'),
     '시대전환' : require('../../src/assets/picture/시대전환.png')
    };

  const imgUrl = `https://www.assembly.go.kr/static/portal/img/openassm/${props.cd}.jpg`
  
  return (
      <View>
          <View style={styles.polyFrame}> 
            <Image source={poly[props.poly]} style={styles.polyPhoto} />
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

  
