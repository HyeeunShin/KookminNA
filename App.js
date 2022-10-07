import React from 'react';
import {SearchPage, CalendarPage} from './src/page';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Config from 'react-native-config';
import axios from 'axios';
// const Stack = createStackNavigator();

// console.log(Config.APP_API_KEY);

const App = () => {
  async function getData() {
    const url = `https://open.assembly.go.kr/portal/openapi/TBPRESSCONF?KEY=${Config.APP_API_KEY}&pIndex=1&pSize=50&Type=json`;

    await axios.get(url).then(response => {
      const data = JSON.stringify(response.data);
      console.log(data);
    });
  }

  getData();

  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={SearchPage} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <CalendarPage />
      {/* <SearchPage /> */}
    </>
  );
};

export default App;
