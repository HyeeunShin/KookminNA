import React, { useEffect, useState, useContext } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, AppRegistry, Linking, TouchableOpacity } from 'react-native';
import snsContext from '../stores/store3';

const InformSns = (props) => {
  const cd = props.code

  const snsContxt = useContext(snsContext);

  const filterSnsdata = snsContxt.find(isCode);

  const [targetData, setTargetData] = useState([]);

  const snsImg = {
    'blog' : require('../assets/img/blog.png'),
    'facebook' : require('../assets/img/facebook.png'),
    'twitter' :require('../assets/img/twitter.png'),
    'youtube' : require('../assets/img/youtube.png'),
     };


  function isEmptyArr(arr)  {
    if(Array.isArray(arr) && arr.length === 0)  {
      return true;
    }
    
    return false;
  }

  function isCode(element){
    if(element.MONA_CD === cd ){
      return true;
    }
  }

  useEffect(() => {

  console.log(filterSnsdata, 22222222222)

    try {
      if (isEmptyArr(filterSnsdata)){
        setTargetData(filterSnsdata)
        console.log(filterSnsdata, '==============targetData')

          }          
      } catch (error) {
        console.log('error');
    }
        
  }, [targetData])


  const snsUrl =  {
    'blog' : String([filterSnsdata.B_URL]) ,
    'facebook' : String([filterSnsdata.F_URL]),
    'twitter' :String([filterSnsdata.T_URL]),
    'youtube' : String([filterSnsdata.Y_URL]) ,
     };


  function isCorrect(props){
   
    return props[0] !== null;

    }

  
  return (
    <SafeAreaView>
        <View style={styles.container}>
          { isCorrect([filterSnsdata.B_URL]) ?        
           (<TouchableOpacity onPress={()=> Linking.openURL(snsUrl['blog'])} >
            <Image source={snsImg['blog']}  style={styles.iconButton}/>
          </TouchableOpacity>) : null}
          { isCorrect([filterSnsdata.F_URL])  ?      
           (<TouchableOpacity onPress={()=> Linking.openURL(snsUrl['facebook'])} >
            <Image source={snsImg['facebook']}  style={styles.iconButton}/>
          </TouchableOpacity>) : null  }
          {isCorrect([filterSnsdata.T_URL])  ?          
           (<TouchableOpacity onPress={()=> Linking.openURL(snsUrl['twitter'])} >
            <Image source={snsImg['twitter']}  style={styles.iconButton}/>
          </TouchableOpacity>) : null }
          {isCorrect([filterSnsdata.Y_URL]) ?          
           (<TouchableOpacity onPress={()=> Linking.openURL(snsUrl['youtube'])} >
            <Image source={snsImg['youtube']}  style={styles.iconButton}/>
          </TouchableOpacity>) : null }
         </View>
    </SafeAreaView>
  );
};
export default InformSns;

const styles = StyleSheet.create({
  container: {
    flex : 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 15,
  },
  iconButton: {
    height : 40,
    width: 40,
    borderRadius: 9,
    margin: 7
  },
});


