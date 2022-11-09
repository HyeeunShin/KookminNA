import {StyleSheet, View, Text, Button,Image, FlatList,StatusBar,SafeAreaView, ImageBackground, Pressable,ScrollView, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Motion } from "@legendapp/motion"
import Title from './Title';
import { TouchableOpacity} from 'react-native-gesture-handler'

const BottomSheet = (props) => {

  
const Item = ( {item} ) => {
  const topData = item.date+' '+item.time;

  return(
      <View style={styles.item}>
      <ImageBackground source={require('../assets/img/AlarmItem.png')} style={styles.image} imageStyle={{ borderRadius: 12, opacity:0.6}}>
        <View style={{flexDirection:'row', alignItems:'center',paddingTop:10}}>
          <View style={styles.nameContainer}>
             <Text style={styles.name}>{item.nPoly}</Text>
          </View>
          <Text style={styles.top}>{topData}</Text>
        </View>
        <Text style={styles.title}>{item.name}</Text>
      </ImageBackground>
    </View>
  )
};


const renderItem = ({ item }) => (
  <TouchableOpacity onPress={() => deleteAlarm(item)}>
    <Item item={item} />
  </TouchableOpacity>
  );

const deleteAlarm = (item) => {
  Alert.alert(
      '알림을 삭제하시겠습니까?',
      '해당 일정의 알림이 삭제됩니다.',
      [
        {text:'취소', style:'cancel'},
        {
          text:'삭제',
          style:'destructive',
          onPress: () => {
            props.setAlarm(props.alarm.filter(it => it !== item))
          }
        }
      ]
    )
}


  return (
    <>  
   
        <View style={styles.container}
            // onPress={() => props.setData(!props.data)}
            >
            <Motion.View style={styles.halfTopImage}
                initial={{ y: 100}}
                animate={{
                    y: 0,
            }}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Title name={'나의 알람 목록'}/>
              <TouchableOpacity onPress={() => props.setData(!data)}>
                <Image source={require('../assets/img/x.png')} style={styles.x}/>
              </TouchableOpacity>
            </View>
            


            <SafeAreaView style={styles.flatArea}>
              <ScrollView>
                <FlatList
                      style={styles.flatStyle}
                      data={props.alarm}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={renderItem}
                  />
              </ScrollView>
            </SafeAreaView>
        
            </Motion.View>
        </View>
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
    // flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  halfTopImage :{
    backgroundColor: '#fff',
    width: '100%',
    height:'70%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    position: 'absolute',
    bottom: 0,
    padding:10
    },
  item: {
    margin:10,
    display:'flex',
    flexDirection:'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
  },
  image:{
    justifyContent:'flex-start',
    width:'100%',
    height:100,

  },

  title: {
    fontSize:14,
    fontWeight:'600',
    paddingHorizontal:16,
    paddingVertical:5,
    lineHeight:20,
  },
  flatStyle: {
    // borderRadius: 24,
    // borderWidth:1,
    borderColor:'#C8C8C8',
  },
  nameContainer: {
    backgroundColor:'#222B45',
    borderRadius:999,
    // margin:10,
    // marginLeft:10,
    marginHorizontal:10
  },
  name: {
    color:'#fff',
    fontSize:12,
    fontWeight:'bold',
    padding: 5
  },
  top:{
    fontSize:12,
    alignSelf:'center',
    color:'#222B45',
    fontWeight:'bold'
  },
  x:{
    // position:'relative',
  }
  
});
