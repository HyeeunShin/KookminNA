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

  function isEmptyArr(arr)  {
    if(Array.isArray(arr) && arr.length === 0)  {
      return true;
    }
    
    return false;
  }

  const getTargetSns = async() => {
    await api
    .getSns('L2I9861C')
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
    console.log(targetData)


       console.log(snsUrl['blog'])
  }, [targetData])

  const Url =  {
    'blog' : [targetData.B_URL] ,
    'facebook' : [targetData.F_URL],
    'twitter' : [targetData.T_URL],
    'youtube' : [targetData.Y_URL] ,
     };

  const snsUrl =  {
    'blog' : String([targetData.B_URL]) ,
    'facebook' : String([targetData.F_URL]),
    'twitter' :String([targetData.T_URL]),
    'youtube' : String([targetData.Y_URL]) ,
     };



  function ShowSns(props){
    params = props.button
    console.log(params)
    if( Url[params] === 'null'){
      return null;
    }

    if( params === 'blog' ){
      return(
        <TouchableOpacity onPress={()=> Linking.openURL(snsUrl['blog'])} >
          <Image source={snsImg['blog']}  style={styles.iconButton}/>
        </TouchableOpacity>
      )
    }
    if( params === 'facebook' ){
      return(
        <TouchableOpacity onPress={()=> Linking.openURL(snsUrl['facebook'])} >
          <Image source={snsImg['facebook']}  style={styles.iconButton}/>
        </TouchableOpacity>
      )
     }
     if(params === 'twitter' ){
      return(
        <TouchableOpacity onPress={()=> Linking.openURL(snsUrl['twitter'])} >
          <Image source={snsImg['twitter']}  style={styles.iconButton}/>
        </TouchableOpacity>
      )
     }
     if(params === 'youtube' ){
      return(
        <TouchableOpacity onPress={()=> Linking.openURL(snsUrl['youtube'])} >
          <Image source={snsImg['youtube']}  style={styles.iconButton}/>
        </TouchableOpacity>
      )
     }
    }
  return (
    <SafeAreaView>
        <View style={styles.container}>
          {/* <TouchableOpacity onPress={()=> Linking.openURL(snsUrl['blog'])} >
            <Image source={snsImg['blog']}  style={styles.iconButton}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> Linking.openURL(snsUrl['facebook'])} >
            <Image source={snsImg['facebook']}  style={styles.iconButton}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> Linking.openURL(snsUrl['twitter'])}  >
            <Image source={snsImg['twitter']} style={styles.iconButton}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> Linking.openURL(snsUrl['youtube'])} >
            <Image source={snsImg['youtube']}  style={styles.iconButton}/>
          </TouchableOpacity> */}

          <ShowSns button ={'blog'}/> 
          <ShowSns button = {'facebook'}/> 
          <ShowSns button ={'twitter'}/> 
          <ShowSns button = {'youtube'}/> 

         </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection: 'row'
  },
  iconButton: {
    height : 40,
    width: 40,
    borderRadius: 7,
    flexDirection: 'row',
    margin: 3
  },
});


export default InformSns;
