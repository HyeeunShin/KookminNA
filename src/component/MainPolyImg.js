import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
// import {kookmin_2} from 'C:\Users\as221\git\KookminNA\src\poly_img\kook\kookmin_2.png';


export default MainPolyImg = () => {
    return (
      <View>
          <View>
            <Text>
              �ȳ��ϼ���
            </Text>
          {/* <Image source={requires('./src/poly_img/kook/kookmin_2.png')} style={styles.image} /> */}
          </View>
      </View>
      );
    
  const styles = StyleSheet.create({
      image: {
        width: 500,
        height: 300,
      },
    });

}
