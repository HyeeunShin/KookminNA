import React, { useEffect, useState, useContext} from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
// import * as api from '../api/server';
import Title from '../component/Title'
import MainPolyImg from './MainPolyImg.js';
import Button from './Button.js';
import FlatItem from './FlatItem';
import InformSns from './InformSns';
import InformContext from '../store2';
import { TouchableOpacity } from 'react-native-gesture-handler';

const InformTable = ({navigation: {navigate}, route}) => {

  const infContxt = useContext(InformContext);

  const filterInfdata = infContxt.find(isCode);

  const [targetData, setTargetData] = useState([]);

  function isEmptyArr(arr)  {
    if(Array.isArray(arr) && arr.length === 0)  {
      return true;
    }
    return false;
  }

  function isCode(element){
    if(element.MONA_CD === route.params.mona_cd){
      return true;
    }
  }

  useEffect(() => {
    setTargetData(filterInfdata)

    console.log(targetData, 11111111111)

    try {
        if (isEmptyArr(filterInfdata)){
            setTargetData(filterInfdata)
            console.log(filterInfdata, '==============targetData')
            }          
      } catch (error) {
              console.log('error');
      }
          
  }, [targetData])
  
  return (

    <SafeAreaView style={{backgroundColor:'#fff'}}>
      <ScrollView>
        <SafeAreaView style={styles.container}> 
          <MainPolyImg cd = {filterInfdata.MONA_CD} poly={filterInfdata.POLY_NM}/>
          <View style = {styles.snsPosition}>
          <InformSns code={filterInfdata.MONA_CD} />
          </View>
          <View style={styles.row}>
            <Text style={styles.mainName}>{filterInfdata.HG_NM}</Text>
            <Text style={styles.mainName}>({filterInfdata.HJ_NM})</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.underText}>{filterInfdata.ENG_NM}</Text>
            <Text style={styles.underText}>{filterInfdata.BTH_DATE}</Text>
            <Text style={styles.underText}>({filterInfdata.BTH_GBN_NM})</Text>
          </View>
          

          <TouchableOpacity onPress={()=> navigate('Calendar',{id:route.params.id, nPoly : filterInfdata.HG_NM+ ','+ filterInfdata.POLY_NM})}>
            <Button name={filterInfdata.HG_NM}/>
          </TouchableOpacity>
        
          <Title name={'국회의원 소개'}/>
          <View>
            <FlatItem title={'선거구'} content={filterInfdata.ORIG_NM}/>
            <FlatItem title={'소속위원회'} content={filterInfdata.CMITS}/>
            <FlatItem title={'당선횟수'} content={filterInfdata.UNITS}/>
            <FlatItem title={'사무실 전화'} content={filterInfdata.TEL_NO}/>
            <FlatItem title={'사무실 호실'} content={filterInfdata.ASSEM_ADDR}/>
            <FlatItem title={'의원 홈페이지'} content={filterInfdata.HOMEPAGE}/>
            <FlatItem title={'이메일'} content={filterInfdata.E_MAIL}/>
            <FlatItem title={'선임비서관'} content={filterInfdata.SECRETARY}/>
            <FlatItem title={'비서관'} content={filterInfdata.SECRETARY2}/>

          </View>
          {/* <Title name={'주요 약력'}/> */}

          <View>
                <View style={styles.memTitleContainer}>
                  <View style={{borderBottomColor:'#B4B4B4',borderBottomWidth: 1, marginBottom:20}}>
                    <Text style={{ fontWeight:'bold', paddingBottom:10}}>주요 약력</Text>
                  </View>
                  <Text style={styles.memTitle}>{filterInfdata.MEM_TITLE}</Text>
                </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
    
  );
}

export default InformTable;

const styles = StyleSheet.create({
  snsPosition:{    
    position : 'absolute',
    right : -5,
    top : 180,
    
  },
  container: {
    flex: 2,
    backgroundColor:'#fff',

  },
  flatContainer: {
    justifyContent: "space-between",
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


