import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const SearchPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SearchPage</Text>
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
