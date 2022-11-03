import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, AppRegistry, ScrollView } from 'react-native';
import * as api from '../api/server';
import Title from '../component/Title'
import MainPolyImg from './MainPolyImg.js';
import Button from './Button.js';
import FlatItem from './FlatItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
// props,{ navigation }
const InformTable = ({navigation: {navigate}, route}) => {
  console.log(route.params.mona_cd)
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
    .getPerson(route.params.mona_cd)
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
  }, [targetData])
  
  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
      <ScrollView>
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
          

          <TouchableOpacity onPress={()=> navigate('Calendar',{id:route.params.id, nPoly : targetData.HG_NM+ ','+ targetData.POLY_NM})}>
            <Button name={targetData.HG_NM}/>
          </TouchableOpacity>
        
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
          </View>
          {/* <Title name={'주요 약력'}/> */}

          <View>
                <View style={styles.memTitleContainer}>
                  <View style={{borderBottomColor:'#B4B4B4',borderBottomWidth: 1, marginBottom:20}}>
                    <Text style={{ fontWeight:'bold', paddingBottom:10}}>주요 약력</Text>
                  </View>
                  <Text style={styles.memTitle}>{targetData.MEM_TITLE}</Text>
                </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
    
  );
}

export default InformTable;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor:'#fff'
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
    marginTop: 30,
    padding: 20,
    borderWidth: 1,
    borderColor: '#3060B0',
    backgroundColor: 'smoke-white',
    borderRadius: 2
  },

  memTitle : {
    fontSize: 14,
    lineHeight: 18
  }
});


