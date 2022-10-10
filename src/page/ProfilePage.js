import React from 'react';
import {FlatList, SafeAreaView,
        StyleSheet,
        Text,
        View} from 'react-native';

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 33}}>      
      <Text>profilePage.</Text>
        {/* <FlatList
          data = {DATA}
          // renderItem={(item)} => <Item title = {item.title} /> */}
      </View>
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

const DATA = [
  {
    title : "���ű�", 
  },
  {
    title : "�Ҽ�����ȸ",
  },
  {
    title : "�缱Ƚ��",
  },
  {
    title : "�繫�� ��ȭ",
  },
  {
    title : "�繫��ȣ��",
  },
  {
    title : "�ǿ� Ȩ������",
  },
];

const Item = ({title}) => {
  return (<View
    style={{
      backgroundColor: '#3060B0',
      padding : 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }}>
      <Text style={{color: 'black', fontSize: 14}}>{title}</Text>
    </View>)
};

export default ProfilePage;
