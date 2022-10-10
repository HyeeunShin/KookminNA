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
    title : "선거구", 
  },
  {
    title : "소속위원회",
  },
  {
    title : "당선횟수",
  },
  {
    title : "사무실 전화",
  },
  {
    title : "사무실호실",
  },
  {
    title : "의원 홈페이지",
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
