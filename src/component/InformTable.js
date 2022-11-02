import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, AppRegistry } from 'react-native';
import * as api from '../api/server';
import Title from '../component/Title'
import MainPolyImg from './MainPolyImg.js';
import FlatItem from './FlatItem';
import InformSns from './InformSns';

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
    .getPerson('8P37634C')
      .then((data) => {
        try {
          if (isEmptyArr(targetData)){
              setTargetData(data[0])
            }          
        } catch (error) {
          console.log('error');
        }
      }) 
  }

  useEffect(() => {
    getTargetPerson()
    console.log(targetData)

  }, [targetData])
  
  return (
    <SafeAreaView style={styles.container}>
      <MainPolyImg cd = {targetData.MONA_CD} poly={targetData.POLY_NM}/>
      <View style={styles.row}>
        <Text style={styles.mainName}>{targetData.HG_NM}</Text>
        <Text style={styles.mainName}>({targetData.HJ_NM})</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.underText}>{targetData.ENG_NM}</Text>
        <Text style={styles.underText}>{targetData.BTH_DATE}</Text>
        <Text style={styles.underText}>({targetData.BTH_GBN_NM})</Text>
      </View>
      
      
      <Title name={'국회의원 소개'}/>
      <View>
        <FlatItem title={'선거구'} content={targetData.ORIG_NM}/>
        <FlatItem title={'소속위원회'} content={targetData.CMITS}/>
        <FlatItem title={'당선횟수'} content={targetData.UNITS}/>
        <FlatItem title={'사무실 전화'} content={targetData.TEL_NO}/>
        <FlatItem title={'사무실 호실'} content={targetData.ASSEM_ADDR}/>
        <FlatItem title={'의원 홈페이지'} content={targetData.HOMEPAGE}/>
        <FlatItem title={'이메일'} content={targetData.E_MAIL}/>
        <FlatItem title={'선임비서관'} content={targetData.SECRETARY}/>
        <FlatItem title={'비서관'} content={targetData.SECRETARY2}/>
        <FlatItem title={'SNS'} content = {<InformSns code='8P37634C'/>} />
      </View>
      <View>
      <Title name={'주요 약력'}/>
      </View>
      <View>
            <View style={styles.memTitleContainer}>
              <Text style={styles.memTitle}>{targetData.MEM_TITLE}</Text>
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
  },
  memTitleContainer: {
    margin: 10,
    padding: 20,
    backgroundColor:'#F2F1F6',
    borderRadius: 2
  },

  memTitle : {
    fontSize: 14,
    lineHeight: 18
  }
});


