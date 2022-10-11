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
      <InformTable HG_NM="������" HJ_NM="�ſ� Ǫ" BTH_GBN_NM="���" />
  );
}



const InformTable = (props) => {
  return(
      <PaddingSection>
        <TableTitle>
          <Typo head size = "b6" style = {{padding: 12}}>
            ��ȸ�ǿ� �Ұ�
          </Typo>
        </TableTitle>

        <Table>
          <TableRow>
            <TableCell title = "�̸�" value = {props.HG_NM} />
          </TableRow>

          <TableRow>
            <TableCell title = "���� �̸�" value = {props.HJ_NM} />
          </TableRow>

          <TableRow>
            <TableCell title = "���/����" value = {props.BTH_GBN_NM} />
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
