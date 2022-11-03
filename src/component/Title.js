import {StyleSheet, View, Text, ProgressViewIOSComponent} from 'react-native';
import React, {useState} from 'react';

const Title = props => {

  return (
    <View>
        <View style={styles.row}>
            <Text style={styles.mark}> | </Text>
            <Text style={styles.title}>{props.name}</Text>
        </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
    
    row: {
        padding: "4%",
        flexDirection: 'row',
        backgroundColor:'#fff'
    },
    mark: {
        color: '#3060B0',
        fontSize: 28,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 15,
        lineHeight: 40
    }
});
