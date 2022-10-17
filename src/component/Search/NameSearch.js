// import React, {useState, useEffect} from "react"
// import {View, TextInput, FlatList, Text} from "react-native"
// import SampleData from '../../assets/data/exdata.js'



// const NameSearch = (props) =>{



//   const [inputText, setInputText] = useState('');

//   return(
//     <View styles = {styles.container}>
//     <TextInput 
//       styles = {styles.textInput}
//       placeholder = "이름을 입력해주세요"
//       value = {inputText}
//       onChangeText={setInputText}
//     />
//     <FlatList
//       data = {SampleData}
//       renderItem = {({item})=>
//       <View style = {styles.row}>
//         <View style={styles.iconContainer}>
//           <Text>Hi</Text>

//         </View>
//         <Text style = {styles.locationText}>{item.name}</Text>

//       </View>
//        }

//     />
//     {/* list of 국회의원 이름*/ }
//     </View> 
//   );
// };
// export default NameSearch;
import React, { useState, useEffect } from 'react';
import exdata from '../../assets/data/exdata';
import styles from './styles'
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import { SearchPage } from '../../page';

const NameSearch =() =>  {

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    //여기다가 공공api 불러와서 필터 데이터 만들기
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     setFilteredDataSource(responseJson);
    //     setMasterDataSource(responseJson);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
      setFilteredDataSource(exdata);
      setMasterDataSource(exdata);
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
         : ''.toUpperCase();
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
    return (
      // Flat List Item
      <Text style={styles.itemContainer} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
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

  const getItem = (item) => {
    // 아이템(국회의원 리스트에 있는 칸 한 개) 클릭했을 때
    alert('Id : ' + item.id + ' Title : ' + item.title);
    // 여기에 달력으로 넘어가는 거 구현
  };
  return (
    <SafeAreaView style = {styles.container}>
        <View style={styles.imageContainer}>
          <Image 
            style={styles.image}
            source={require('../../assets/picture/koreaAssemblyLogo.png')} />
        </View>

        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="이름을 입력하세요"
        />
        <View style={styles.assemblyListBar}>
        <SearchPage/>
        <Image 
          style={styles.assemblyListBar_image}
          source={require('../../assets/picture/Rectangle805.png')} />
        </View>
        <FlatList
          data={filteredDataSource}//filteredDataSource
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          />
    </SafeAreaView>
  );
};

export default NameSearch;
