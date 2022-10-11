import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#000',
  }
});

const data = [
  {
    id: 1,
    left: '�̸�',
    right: '�Ѽ���'
  },
  {
    id: 2,
    left: '�����̸�',
    right: 'xsooooe'
  },
  {
    id: 3,
    left: '�����̸�',
    right: '�ſ� ��'
  },
  {
    id: 4,
    left: '����/���',
    right: '���'
  },
  {
    id: 5,
    left: '�������',
    right: '2000.09.28'
  }
]

export default class InformTable extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {
            data.map((item, id) => (
              <View 
                style={[
                  styles.item,
                  (id == 1) && { borderTopWidth: 0 }, // CSS: first-child
                  (id % 2 === 0) && { backgroundColor: '#eee' } // CSS: nth-child(even)
              ]}>
                <Text>{item.left}</Text>
                <Text>{item.right}</Text>
              </View>
            ))
          }
        </View>
      </SafeAreaView>
    );
  }
}