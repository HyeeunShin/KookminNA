import React, {useState, useEffect} from 'react';
import Title from '../component/Title'
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SearchPage } from '../page';
import * as api from '../api/server'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Search/styles';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;



const Example = () => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const getMemberInfo = async () => {
        api.getMember().then(function(data){
        setFilteredDataSource(data);
        setMasterDataSource(data);
        })
    }
    useEffect(() => {
        getMemberInfo()
        
    }, []);

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


  const renderNavBar = () => {
    return (
      <View style={{ marginTop: '10%', elevation:100000, zIndex:100000}}>
        <View style={{display: 'flex',flexDirection:'column', alignItems:'center', backgroundColor:'#fff'}}>    
          <Image source={require('../assets/img/koreaAssemblyLogo.png')} />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="이름을 입력하세요"
            />
        </View>
        <Title name={'국회의원 명단'}/>
    </View>
    );
  };

const renderContent = () => {
  return (
      <View>
        <FlatList style= {styles.container}
          nestedScrollEnabled
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          />
      </View>    
  );
};

const title = () => {
  return (
    <View style={{ marginTop:'5%', zIndex:1000000, elevation:100000}}>
      <TouchableOpacity style={{display: 'flex',flexDirection:'column', alignItems:'center', backgroundColor:'#fff', zIndex:1000000, elevation:100000}} onPress={()=>console.log(1)}>    
        <Image source={require('../assets/img/koreaAssemblyLogo.png')} />
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="이름을 입력하세요"
          autoFocus={true}
          />
      </TouchableOpacity>
      <Title name={'관심 국회의원'}/>
      <SearchPage/>
      <Title name={'국회의원 명단'}/>
    </View>
  );
};

    const ItemSeparatorView = () => {
        return (

          <View
            style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#C8C8C8',
            }}
        />
        );
    };


const ItemView = ({ item }) => {
    const imgUrl = `https://www.assembly.go.kr/static/portal/img/openassm/${item.MONA_CD}.jpg`
    return (
      // Flat List Item
      <TouchableOpacity onPress={() => navigation.navigate('Info',{id: item.id, mona_cd : item.MONA_CD})}>

        <View style={styles.flatListProfile}>
          
          <Image source={{uri : imgUrl}} style={styles.profile} />

          <View style={{flexDirection: 'row', margin: 4}}>
            <View style={styles.flatListTextProfile}>
              <Text style={styles.textName}>{item.HG_NM}</Text> 

              <View style={styles.row}>
                <Text style={styles.Ename}>{item.ENG_NM}</Text> 
                <Text style={styles.birth}>{item.BTH_DATE}</Text> 
              </View>

            </View>
            <Text style={styles.textPoly}>{item.POLY_NM}</Text> 
            <Image
              style={styles.star}
              source={require('../assets/img/EmpyStar.png')}
            />
          </View>
        </View>
      </TouchableOpacity>

    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
          <ReactNativeParallaxHeader
          headerMinHeight={HEADER_HEIGHT*3}
          headerMaxHeight={520}
          extraScrollHeight={250}
          navbarColor="#fff"
          title={title()}
          alwaysShowTitle={false}
          alwaysShowNavBar={false}
          backgroundColor={'#fff'}
          backgroundImageScale={1.2}
          renderNavBar={renderNavBar}
          renderContent={renderContent}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
          scrollViewProps={{
            onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
            onScrollEndDrag: () => console.log('onScrollEndDrag'),
          }}
        />
      
    </>
  );
};

export default Example;