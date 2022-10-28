import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import InformTable from '../component/InformTable.js';
import MainPolyImg from '../component/MainPolyImg.js';

const InformPage = () => {

  return (
    <SafeAreaView>
      <ScrollView>
          <MainPolyImg cd = '14M56632'/>
          <InformTable/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default InformPage;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingTop: StatusBar.currentHeight,
  // },
  scrollView: {
    marginHorizontal: 20,
  }
  // text: {
  //   fontSize: 42,
  // },
});