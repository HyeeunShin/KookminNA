import {StyleSheet, View, Text, TouchableOpacity, Button,Image, FlatList,StatusBar,SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Motion } from "@legendapp/motion"

const BottomSheet = (props) => {

    const data = [
  
    {
      id: 0,
      description: 'Tenerife, Canary Islands',
    },
    {
      id: 1,
      description: 'Tenerife, Santa Cruz de Tenerife',
    },
    {
      id: 2,
      description: 'Tenerife, El Medano',
    },
    {
      id: 3,
      description: 'Tenerife, Costa Adeje',
    },
    {
      id: 4,
      description: 'Tenerife, Puerto de la Cruz',
    }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.image}
        source={require('../assets/img/alarm.png')} />
  </View>
);


const renderItem = ({ item }) => (
    <Item title={item.description} />
  );


  return (
    <>  
        <TouchableOpacity style={styles.container}
            onPress={() => props.setData(!props.data)}
            >
            <Motion.View style={styles.halfTopImage}
                initial={{ y: 100}}
                animate={{
                    y: 0,
            }}>
            <SafeAreaView style={styles.flatArea}>
                <FlatList
                    style={styles.flatStyle}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        
            </Motion.View>
        </TouchableOpacity>
    </>
  );
};

export default BottomSheet;

const styles =  StyleSheet.create({
  container: {
    zIndex:1,
    position:'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  flatArea:{
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  halfTopImage :{
    backgroundColor: '#fff',
    width: '100%',
    height:'50%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    position: 'absolute',
    bottom: 0
    },
  item: {
    borderTopWidth:1,
    borderColor:'#C8C8C8',
    display:'flex',
    flexDirection:'row'
  },
  title: {
    fontSize:18,
    lineHeight: 36,
  },
  flatStyle: {
    borderRadius: 24,
    borderWidth:1,
    borderColor:'#C8C8C8',
    padding:0,
  },
  image: {
    width: 30,
    height: 30,
  }
  
});
