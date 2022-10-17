import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';

const RenderDay = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginBottom: 4, marginTop: 4}}>
        <View style={{
          width: 10,
          height: 10,
          borderRadius: 999,
          backgroundColor: props.color,
          margin: 3,
          marginRight: 5,
        }} />
        <Text style={styles.text1}>{props.scheduleTime}</Text>
      </View>
      <Text style={styles.text2}>{props.scheduleName}</Text>
      <Text style={styles.text3}>{props.schedulePlace}</Text>
    </View>
  );
};

export default RenderDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 12,
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
    fontSize: 14,
    fontWeight: '600',
  },
  text2: {
    color: '#000',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
  },
  text3: {
    color: '#8F9BB3',
    fontSize: 14,
    lineHeight: 28,
  },
});
