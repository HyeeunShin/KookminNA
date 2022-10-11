import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const CalendarPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>calendarPage ¿‘¥œ¥Ÿ.</Text>
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

export default CalendarPage;
