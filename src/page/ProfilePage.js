import React from 'react';
import {FlatList, SafeAreaView,
        StyleSheet,
        Text,
        View} from 'react-native';
import { DataTable } from 'react-native-paper';

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InformTable/>
    </SafeAreaView>
  );
};

function InformData() {
  return(
      <InformTable HG_NM="신혜연" HJ_NM="매울 푸" BTH_GBN_NM="양력" />
  );
}



const InformTable = (props) => {
  return(
      <PaddingSection>
        <TableTitle>
          <Typo head size = "b6" style = {{padding: 12}}>
            국회의원 소개
          </Typo>
        </TableTitle>

        <Table>
          <TableRow>
            <TableCell title = "이름" value = {props.HG_NM} />
          </TableRow>

          <TableRow>
            <TableCell title = "한자 이름" value = {props.HJ_NM} />
          </TableRow>

          <TableRow>
            <TableCell title = "양력/음력" value = {props.BTH_GBN_NM} />
          </TableRow>
        </Table>
      </PaddingSection>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
});



export default ProfilePage;
