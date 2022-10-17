import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';


const InformTable = () => {

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

  const hgName = data.filter(item => item.id ==='HG_NM').map(item => item.content);
  const egName = data.filter(item => item.id ==='ENG_NM').map(item => item.content);
  const birth = data.filter(item => item.id ==='UNIT_CD').map(item => item.content);
  const hjName = data.filter(item => item.id ==='HJ_NM').map(item => item.content);

  const styles = StyleSheet.create({
    container: {
      flex: 2,

    },
    mainName:{
      paddingLeft:15,
      fontSize: 22,
      fontWeight: "bold",
      lineHeight: 43,
    },
    underText:{
      paddingLeft: 16,
      fontSize: 15,
      lineHeight: 15,
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
      <Text style={styles.mainName}>
        {hgName} ({hjName})
       </Text>
       <Text style={styles.underText}>
       {egName}   {birth}
       </Text>
       <Text style={styles.mainName}>
       국회의원 소개
       </Text>
      <View>
        {
          data.map((item, id) => (
            <View 
              style={[
                 styles.item,
                 { borderTopWidth: 0 }, // CSS: first-child
                (id % 2 === 0) && { backgroundColor: '#eee' } // CSS: nth-child(even)
            ]}>
              <Text key={item.id}>{item.title} </Text>
              <Text key ={item.id}>{item.content}</Text>
            </View>
          ))          
          }
      </View>
    </SafeAreaView>
  );
}

export default InformTable;