import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import InformTable from '../component/InformTable.js';

const InformPage = () => {

  return (
    <SafeAreaView>
      <ScrollView>
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