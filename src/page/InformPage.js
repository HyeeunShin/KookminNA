import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {InformTable,
        MainPolyImg} from './src/component/';

const InformPage = () => {
  return (
    <SafeAreaView style={styles.container}>
        <MainPolyImg/>
        {/* <InformTable/> */}
    </SafeAreaView>
  );
};
export default InformPage;
