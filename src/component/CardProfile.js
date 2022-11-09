import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';

const CardProfile = ( prop, propFunction, data) => {
  
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => propFunction(data.filter(it => it !== prop.item))}>
          <Image
            style={styles.star}
            source={require('../assets/img/FullStar.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.profile}
          source={{
            uri: `https://www.assembly.go.kr/static/portal/img/openassm/${prop.item.MONA_CD}.jpg`
          }}
        />
        <View>
          <Text style={styles.poly}>{prop.item.POLY_NM}</Text>
          <Text style={styles.Hname} numberOfLines={1}>{prop.item.HG_NM}</Text>
          <Text style={styles.Ename}>{prop.item.ENG_NM}</Text>
          <Text style={styles.birth}>{prop.item.BTH_DATE}</Text>
        </View>
    </View>
    </TouchableOpacity>
  );
};

export default CardProfile;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#C9D6E8',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
  },
  poly: {
    color: '#3060B0',
    fontSize: 10,
  },
  Hname: {
    fontSize: 13,
    lineHeight: 22,
    fontWeight: 'bold'
  },
  Ename: {
    fontSize: 10,
  },
  birth: {
    fontSize: 8,
    marginTop: 2,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 99,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#2B65B4',
    marginBottom: 12
  },
  star:{
    width: 20,
    height: 20,
    position: 'absolute',
    right: -5,
    top: -5,
  }
});
