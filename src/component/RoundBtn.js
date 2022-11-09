import React from "react"; 
import { TouchableOpacity, Text } from "react-native";
import {StyleSheet,Image} from 'react-native';


const RoundBtn = (props) => {
    return (
      <TouchableOpacity style={styles.container} onPress={()=>props.setData(!props.data)}>
        <Image source={require('../assets/img/roundBtn.png')} style={styles.image}/>
      </TouchableOpacity>
    );
};

export default RoundBtn;

const styles = StyleSheet.create({
    image:{
        width:80,
        height:80,
        zIndex:1,
        marginBottom:60,
        marginRight:20,
    },
  container: {
    position:'absolute',
    right:0,
    bottom:0,
    flex: 1,
    zIndex:4,
  },
})