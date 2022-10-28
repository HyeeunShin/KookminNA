import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, AppRegistry } from 'react-native';
import * as api from '../api/server';
import Title from '../component/Title'
import MainPolyImg from '../component/MainPolyImg.js';

const InformTable = () => {
  const [targetData, setTargetData] = useState([]);
  const [NTopData, setNTopData] = useState();
  const [mainItems, setMainItems] = useState();
  const [subItems, setSubItems] = useState();

  function isEmptyArr(arr)  {
    if(Array.isArray(arr) && arr.length === 0)  {
      return true;
    }
    
    return false;
  }

  const getTargetPerson = async() => {
    await api
    .getPerson('14M56632')
      .then((data) => {
        try {
          if (isEmptyArr(targetData)){
              setTargetData(data[0])
              console.log(targetData)
            }         
        } catch (error) {
          console.log('error');
        }
      }) 
  }

  useEffect(() => {
    getTargetPerson()
    console.log(1111, targetData)
  }, [targetData])
  
  console.log(targetData.HG_NM)

  




  return (
    <SafeAreaView style={styles.container}>
      <MainPolyImg cd = {targetData.MONA_CD}/>
      <View style={styles.row}>
        <Text style={styles.mainName}>{targetData.HG_NM}</Text>
        <Text style={styles.mainName}>({targetData.HJ_NM})</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.underText}>{targetData.ENG_NM}</Text>
        <Text style={styles.underText}>{targetData.BTH_DATE}</Text>
      </View>
      
      
       <View style={styles.titleBar}>
      <Title name={'국회의원 소개'}/>
      </View>
      <Title name={'주요 약력'}/>

      <View>
            <View>
              <Text> </Text>
            </View>
      </View>
    </SafeAreaView>
  );
}

export default InformTable;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  row: {
    flexDirection:'row'
  },
  mainName:{
    paddingLeft:15,
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 33,
  },
  underText:{
    paddingLeft: 16,
    fontSize: 16,
    lineHeight: 24,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 25 ,
    borderTopWidth: 1,
    borderColor: '#000',
  },
  titleBar:{
    flexDirection:'row',
    paddingVertical : 20,
    paddingLeft : 5,
    fontSize: 15,
    lineHeight: 21,
  },
  titleText:{
    paddingLeft: 10,
    paddingVertical: 5,
    fontSize: 15,
    lineHeight: 21,
  }
});


