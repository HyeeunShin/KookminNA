import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MainPolyImg = (props) => {

  const poly = {
    //  '국민의힘' : require('./국민의힘.png'),
    //  '더불어민주당' : require('./더불어민주당.png'),
    //  '기본소득당' : require('./기본소득당.png'),
    //  '정의당' : require('./정의당.png'),
    //  '시대전환' : require('./시대전환.png'),
    '무소속' : require('./무소속.png'),

    };

  const imgUrl = `https://www.assembly.go.kr/static/portal/img/openassm/${props.cd}.jpg`
  
  return (
      <View>
          <LinearGradient style={styles.polyFrame} colors={['rgba(110, 127, 154, 0) 55.36%', 'rgba(142, 142, 142, 0.4)']}> 
            <Image source={poly['무소속']} style={styles.polyPhoto} />
          </LinearGradient>
          <View style = {styles.imgFrame}>
            <Image source={{uri : imgUrl}} style={styles.personImg} />
          </View>
      </View>

      );
}

export default MainPolyImg;

const styles = StyleSheet.create({
  polyPhoto: {
    width: "100%",
    height: '100%',
    opacity: 0.4,

  },
  polyFrame: {
    flex: 1,
    zIndex: 1,
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
    zIndex:2,

    width : "100%",
    height: 50,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    elevation: 5,
  },
});

  