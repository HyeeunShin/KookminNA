import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const SearchPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>searchPage 입니다.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchPage;
