import {StyleSheet, View, Text, TouchableOpacity, Button, ProgressViewIOSComponent} from 'react-native';
import React, {useState, useEffect} from 'react';

const RenderDay = props => {

  const colorType = props.color;
  
  return (
    <>
        <View style={[styles.container,{borderColor:colorType}]}>
            <View style={{flexDirection: 'row', marginBottom: 4, marginTop: 4}}>
              <Text style={styles.text1}>{props.scheduleTime}</Text>
            </View>
                
            <Text style={styles.text2}>{props.scheduleName}</Text>
            <Text style={styles.text3}>{props.schedulePlace}</Text>
          </View>
    </>
  );
};

export default RenderDay;

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 12,
    borderLeftWidth: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    padding: 10,
    paddingLeft: 15,
  },

  text1: {
    color: '#8F9BB3',
    fontSize: 12,
    fontWeight: '600',
  },
  text2: {
    color: '#000',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
  },
  text3: {
    color: '#8F9BB3',
    fontSize: 14,
    lineHeight: 28,
  },
  containerBtn: {
    position:'absolute',
    flex: 1,
    margin: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    height: '80%',
    width: '20%',
    right:0,
    justifyContent:'space-around'
  },
});
