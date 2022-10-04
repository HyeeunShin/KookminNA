import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import CalendarView from '../component/CalendarView.js';

const CalendarPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>calendarPage 입니당</Text>
      <CalendarView />
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
