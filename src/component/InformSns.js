import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, AppRegistry, Linking, TouchableOpacity } from 'react-native';
import * as api from '../api/server';


const InformSns = () => {

  const snsImg = {
    'blog' : require('../assets/img/blog.png'),
    'facebook' : require('../assets/img/facebook.png'),
    'twitter' :require('../assets/img/twitter.png'),
    'youtube' : require('../assets/img/youtube.png'),
     };

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

  const getTargetSns = async() => {
    await api
    .getSns('14M56632')
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
    getTargetSns()
    console.log(targetData.B_URL)

    const snsUrl = {
      'blog' : [targetData.B_URL],
      'facebook' : [targetData.F_URL],
      'twitter' : [targetData.T_URL],
      'youtube' : [targetData.Y_URL],
       };
  }, [targetData])
  


  return (
    <SafeAreaView>
      <TouchableOpacity >
      <Image source={snsImg['blog']} style={styles.iconButton}/>
      <Image source={snsImg['facebook']} style={styles.iconButton}/>
      <Image source={snsImg['twitter']} style={styles.iconButton}/>
      <Image source={snsImg['youtube']} style={styles.iconButton}/>
 
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    height : 40,
    width: 40,
    borderRadius: 7,

  },
});


export default InformSns;
