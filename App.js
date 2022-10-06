import React from 'react';
import {SearchPage, CalendarPage} from './src/page';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

const App = () => {
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
