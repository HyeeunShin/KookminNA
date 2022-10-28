import React from 'react';
import {SearchPage, InformPage} from './src/page';
import NameSearch from './src/component/Search/NameSearch.js';
import CalendarView from './src/component/CalendarView';
import InformTable from './src/component/InformTable';
import "react-native-gesture-handler";
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Name' component={NameSearch}/>
        <Stack.Screen name='Calendar' component={CalendarView}/>
        <Stack.Screen name='Info' component={InformTable}/>
      </Stack.Navigator>
    </NavigationContainer>
      
    );
};

export default App;

