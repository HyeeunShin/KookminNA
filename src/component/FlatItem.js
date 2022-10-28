import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';

const FlatItem = props => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.content}</Text>
    </View>
  );
};

export default FlatItem;

const styles = StyleSheet.create({
  container: {
    borderColor: '#D9D9D9',
    borderTopWidth:1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    width: '25%',
    textAlign:'center',
    lineHeight: 34,
    color: '#3060B0',
    fontWeight: 'bold'
  },
  content: {
    lineHeight: 34
  }
});
