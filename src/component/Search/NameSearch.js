import React, { useState, useEffect } from 'react';
import styles from './styles'
import * as api from '../../api/server.js';
import Title from '../../component/Title'
import  userDataStorage from '../../user/userDataStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { SearchPage } from '../../page';

const NameSearch =({navigation}) =>  {
  

  const [selectedName, setSelectedName] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    getMemberInfo()
    userDataStorage.get("selectedName").then(setSelectedName).catch(console.error);
    console.log(selectedName)

  }, []);

  useEffect(() => {
    userDataStorage.set("selectedName",selectedName).catch(console.error);

  }, [selectedName]);

  const onRemove = (target) => {
    setSelectedName(selectedName.filter((it) => it.MONA_CD !== target.MONA_CD)); 
  }

  const appendData = async(target) => {
    setSelectedName([...selectedName, target]) ;
  }
  

  const getMemberInfo = async () => {
      api.getMember().then(function(data){
      setFilteredDataSource(data);
      setMasterDataSource(data);
    })
  }


  const searchFilterFunction = (text) => {

    if (text) {
     
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.HG_NM
          ? item.HG_NM.toUpperCase()
         : ''.toUpperCase();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ( item, key ) => {
  
    const imgUrl =`https://www.assembly.go.kr/static/portal/img/openassm/${item.MONA_CD}.jpg`
    return (
      <TouchableOpacity key={key} onPress={() => navigation.navigate('Info',{id:item.id, mona_cd:item.MONA_CD})}>
        <View style={[styles.flatListProfile,{borderColor:'#C8C8C8', borderTopWidth:0.5}]}>
          <View style={{flexDirection: 'row'}}>
              <Image source={{uri : imgUrl}} style={styles.profile} />

              <View style={{flexDirection: 'row', margin: 4}}>
                <View style={styles.flatListTextProfile_Left}>
                  <Text style={styles.textName}>{item.HG_NM}</Text> 
                  <View style={styles.row}>
                    <Text style={styles.Ename}>{item.ENG_NM}</Text>  
                    <Text style={styles.birth}>{item.BTH_DATE}</Text> 
                  </View>
                </View>
              </View>
          </View>
          
          
          <View style ={styles.flatListTextProfile_Right}>
            <Text style={styles.textPoly}>{item.POLY_NM}</Text> 
            <TouchableOpacity onPress={()=>JSON.stringify(selectedName).indexOf(JSON.stringify(item.MONA_CD)) > -1?  onRemove(item) : appendData(item)}
              style={styles.star}>
              {JSON.stringify(selectedName).indexOf(JSON.stringify(item.MONA_CD)) > -1 ? <Image style={styles.star} source={require('../../assets/img/FullStar.png')}/> : <Image style={styles.star} source={require('../../assets/img/EmpyStar.png')}/> }
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
      <SafeAreaView style={{
        backgroundColor: '#ffffff',
        height:'100%',
      }} >
        <View style={{paddingHorizontal:20}}>
          <View style={styles.imageContainer}> 
              <Image 
                source={require('../../assets/img/koreaAssemblyLogo.png')} />
            </View>

            <View style={styles.textInputStyle}>
              <TextInput
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="이름을 입력하세요"
              />
              <Image 
                style={styles.magnify}
                source={require('../../assets/img/MagnifyingGlass.png')} />
            </View>
        </View>
            
        <ScrollView style={{padding:10}}>
            <SearchPage  selectedName = {selectedName} setSelectedName = {setSelectedName}/>
            <View style={styles.assemblyListBar}>
              <Title name={'국회의원 명단'}/>
              {
                filteredDataSource.map((e,i) => ItemView(e,i))
              }
            </View>
        </ScrollView>
      </SafeAreaView>
  );
};

export default NameSearch;
