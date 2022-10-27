import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, AppRegistry } from 'react-native';
import * as api from '../api/server';

const InformTable = () => {
const [topdata, setTopData] = useState();
const [NTopData, setNTopData] = useState();
const [mainItems, setMainItems] = useState();
const [subItems, setSubItems] = useState();

  const getp = async() => {
    await api
    .getPerson('14M56632')
      .then((data) => {
        try {
          if (topdata === undefined){
              setTopData(data[0])
            }         
        } catch (error) {
          console.log('error');
        }
      }) 
  }

  useEffect(() => {
    getp()
    if(topdata !== undefined){
      console.log(1111, topdata)
      setNTopData(topdata)
      }


    
      // console.log(topdata['EG_NM'])

  //   if(NTopData === undefined){
  //   setNTopData(topdata)
  //   console.log(1010, NTopData.HG_NM)
  // }

   
    // }
  
  }, [topdata])
  
  console.log(2222, NTopData.E_MAIL)

  if(NTopData !== undefined){
    if(mainItems === undefined && subItems===undefined){
      const mainItem = {
        "HG_NM": NTopData['HG_NM'],
        "EG_NM": NTopData['EG_NM'],
        "HJ_NM": NTopData['HJ_NM'],
        "BTH_DATE": NTopData['BTH_DATE'],
      }
      const subItem = {
        "BTH_GBN_NM": NTopData['BTH_GBN_NM'],
        "SEX_GBN_NM": NTopData['BTH_DATE'],
        "REELE_GBN_NM": NTopData['REELE_GBN_NM'],
        "UNITS": NTopData['UNITS'],
        "UNIT_NM": NTopData['UNIT_NM'],
        "POLY_NM": NTopData['POLY_NM'],
        "ORIG_NM": NTopData['ORIG_NM'],
        "ELECT_GBN_NM": NTopData['ELECT_GBN_NM'],
        "ASSEM_ADDR": NTopData['ASSEM_ADDR'],
        "TEL_NO": NTopData['TEL_NO'],
        "HOMEPAGE": NTopData['HOMEPAGE'],
        "E_MAIL": NTopData['E_MAIL'],
        "MEM_TITLE": NTopData['MEM_TITLE'],
      }
      setMainItems(mainItem); 
      setSubItems(subItem);
    }
  }




  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainName}>
        {/* {mainItems['HG_NM']}  {mainItems['HJ_NM']} */}
       </Text>
       <Text style={styles.underText}>
        {/* {mainItems['EG_NM']}  {main['BTH_DATE']} */}
       </Text>
       <View style={styles.titleBar}>
        <Image source={require('../img/titleBar.png')}/>
        <Text style={styles.titleText}>
          국회의원 소개
        </Text>
       </View>

      <View>
            <View>
              <Text> 주요 약력 </Text>
              {/* <Text> {subItems['MEM_TITLE']} </Text> */}
            </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,

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

export default InformTable;