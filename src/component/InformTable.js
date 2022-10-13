import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';


export default InformTable = () => {

    const data = [
    {
      id: "HG_NM",
      title: "이름",
      content: "한소희"
    },
    {
      id: "HJ_NM",
      title: "한자 이름",
      content: "氏邵韓"
    },
    {
      id: "ENG_NM",
      title: "영문명",
      content: "Han So Hee"
    },
    {
      id: "BTH_GBN_NM",
      title: "음력/양력",
      content: "양력"
    },
    {
      id: "SEX_GBN_NM",
      title: "성별",
      content: "여성"
    },
    {
      id: "REELE_GBN_NM",
      title: "재선",
      content: "X"
    },
    {
      id: "UNITS",
      title: "당선",
      content: "O"
    },  {
      id: "UNIT_CD",
      title: "생년월일",
      content: "2000-09-28"
    },  {
      id: "UNIT_NM",
      title: "대",
      content: "20대"
    },  {
      id: "POLY_NM",
      title: "정당명",
      content: "한나라당"
    },  {
      id: "ORIG_NM",
      title: "선거구",
      content: "서울시 동대문구"
    },  {
      id: "ELECT_GBN_NM",
      title: "선거구 구분",
      content: "동대문구 을"
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      paddingHorizontal: 25 ,
      borderTopWidth: 1,
      borderColor: '#000',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {
          data.map((item, id) => (
            <View 
              style={[
                 styles.item,
                 { borderTopWidth: 0 }, // CSS: first-child
                (id % 2 === 0) && { backgroundColor: '#eee' } // CSS: nth-child(even)
            ]}>
              <Text>{item.title}</Text>
              <Text>{item.content}</Text>
            </View>
          ))          
          }
      </View>
    </SafeAreaView>
  );
}

