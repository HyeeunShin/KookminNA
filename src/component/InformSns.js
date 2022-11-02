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

  }, [targetData])


  const snsUrl =  {
    'blog' : String([targetData.B_URL]) ,
    'facebook' : String([targetData.F_URL]),
    'twitter' :String([targetData.T_URL]),
    'youtube' : String([targetData.Y_URL]) ,
     };


  function isNull(props){
    params = props

    if(params === 'null'){
      return false;
    }
    else{
      return true;
    }

    }

  return (
    <SafeAreaView>
        <View style={styles.container}>
          { isNull([targetData.B_URL]) !== null ?        
           (<TouchableOpacity onPress={()=> Linking.openURL(snsUrl['blog'])} >
            <Image source={snsImg['blog']}  style={styles.iconButton}/>
          </TouchableOpacity>) : null}
          { isNull([targetData.F_URL])  ?      
           (<TouchableOpacity onPress={()=> Linking.openURL(snsUrl['facebook'])} >
            <Image source={snsImg['facebook']}  style={styles.iconButton}/>
          </TouchableOpacity>) : null  }
          {isNull([targetData.T_URL]) ?          
           (<TouchableOpacity onPress={()=> Linking.openURL(snsUrl['twitter'])} >
            <Image source={snsImg['twitter']}  style={styles.iconButton}/>
          </TouchableOpacity>) : null }
          {isNull([targetData.Y_URL]) ?          
           (<TouchableOpacity onPress={()=> Linking.openURL(snsUrl['youtube'])} >
            <Image source={snsImg['youtube']}  style={styles.iconButton}/>
          </TouchableOpacity>) : null }


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
