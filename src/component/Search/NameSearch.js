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
  Button,
  TouchableOpacity,
  Pressable
} from 'react-native';
import { SearchPage } from '../../page';

const NameSearch =({navigation}) =>  {
  

  const [selectedName, setSelectedName] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  // userDataStorage.set(selectedName).catch(console.error);


  
 

  



  const onRemove = (target) => {
    console.log('--------------------------')
    // console.log('target',target)
    setSelectedName(selectedName.filter((it) => it.MONA_CD !== target.MONA_CD)); 
    console.log("removed", selectedName);
  
  
  }

//   const getData = async () => {
//     userDataStorage.get().then(function(data){
//       console.log(1111111111111111111111111111111)
//      console.log(data)
//   })
// }

  const appendData = async(target) => {
    // console.log('target', target)
    setSelectedName([...selectedName, target]) ;
    // console.log('selectedname',selectedName)
    // userDataStorage.set(selectedName).catch(console.error);

    // console.log('Local',getData())
    // console.log("appended", selectedName);
    
  }
  

  const getMemberInfo = async () => {
      api.getMember().then(function(data){
      setFilteredDataSource(data);
      setMasterDataSource(data);
    })
  }
  useEffect(() => {
    getMemberInfo()
    userDataStorage.get("selectedName").then(setSelectedName).catch(console.error);
    console.log(selectedName)

  }, []);

  useEffect(() => {
    userDataStorage.set("selectedName",selectedName).catch(console.error);

  }, [selectedName]);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.HG_NM
          ? item.HG_NM.toUpperCase()
         : ''.toUpperCase();
        //  const itemData_ENG = item.ENG_NM
        //   ? item.ENG_NM.toUpperCase()
        //  : ''.toUpperCase();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
  
    const imgUrl =`https://www.assembly.go.kr/static/portal/img/openassm/${item.MONA_CD}.jpg`
    return (
      // Flat List Item
      <TouchableOpacity onPress={() => navigation.navigate('Info',{id:item.id, mona_cd:item.MONA_CD})}>
      <View style={styles.flatListProfile}>
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
      // </Pressable>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // 국회의원 리스트 사이사이에 선 긋기
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
      <SafeAreaView style={{
        backgroundColor: '#ffffff',
        height:'100%',
        
      }} >  
      <ScrollView style={{padding:15}}>
        {/* 전체화면 */}
          <View style={styles.imageContainer}> 
          
          {/* 이미지 담기용 뷰 */}
            <Image 
              source={require('../../assets/img/koreaAssemblyLogo.png')} />
          </View>

          <View style={styles.textInputStyle}>
            <TextInput
              // 검색바
              // style={styles.textInputStyle}
              onChangeText={(text) => searchFilterFunction(text)}
              value={search}
              underlineColorAndroid="transparent"
              placeholder="이름을 입력하세요"
            />
            <Image 
              style={styles.magnify}
              source={require('../../assets/img/MagnifyingGlass.png')} />
          </View>

          <SearchPage  selectedName = {selectedName} setSelectedName = {setSelectedName} /*관심 국화의원 */ />
          
          <View style={styles.assemblyListBar}
          /*국회의원 명단 */ > 
            <Title name={'국회의원 명단'}/>

            <FlatList style= {styles.container}
            data={filteredDataSource}//filteredDataSource
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            
            
            >
            
            </FlatList>
          </View>
      </ScrollView>
      
           
          
          
      </SafeAreaView>
    
    
  );
};

export default NameSearch;
