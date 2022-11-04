import React, { createContext, useContext, useEffect, useState } from 'react';
import {SearchPage, InformPage} from './src/page';
import NameSearch from './src/component/Search/NameSearch.js';
import CalendarView from './src/component/CalendarView';
import InformTable from './src/component/InformTable';
import "react-native-gesture-handler";
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Example from './src/component/Example';
import * as api from './src/api/server.js';
import AppContext from './src/store';
import InformContext from './src/store2';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  const Stack = createStackNavigator();

    // const [state, actions] = useContext(null);
    const [schedule, setSchedule] = useState(null)
    const getScheduleInfo = async () => {
      await api
        .getSchedule()
          .then((data) =>{
            setSchedule(data);
            
            // console.log('schedule', data[0])
          })
          .catch((error) => console.log(error));
      }


    const [information, setInformation] = useState(null)
    const getInformationInfo = async () => {
      await api
        .getInform()
          .then((data) => {
            setInformation(data);
          
          })
          .catch((error) => console.log(error))
    }

    useEffect(()=>{
      getScheduleInfo()
      getInformationInfo()

      if (schedule !== null && information!== null)
      {
        SplashScreen.hide()
      }    
    // console.log(schedule)

    // try {
    //     getScheduleInfo()
    //     SplashScreen.hide();
    //     console.log('splashImage')
    // } catch(e) {
    //   console.warn('에러발생');
    //   console.warn(e);
    // }

    // console.log(information);
  },[schedule, information])

  return (
    <InformContext.Provider value = {information}>
      <AppContext.Provider value = {schedule} >
        <NavigationContainer>

          <Stack.Navigator
            initialRouteName='Start'
            screenOptions={() => ({
                headerTitleStyle:{
                  color:'#fff',
                },
              })}>
            <Stack.Screen options={{headerShown: false}} name='Name' component={NameSearch}/>
            <Stack.Screen 
              options={{
                headerBackTitle: "Back",
              }}
              name='Calendar'
              component={CalendarView}/>
              {/* children={({navigation})=><CalendarView name={name} setName={setName} navigation={navigation}/>}/> */}
            <Stack.Screen
              options={{
                headerBackTitle: "Back",
              }}
              name='Info'
              component={InformTable}/>
          </Stack.Navigator>

          </NavigationContainer>      
        </AppContext.Provider>
      </InformContext.Provider>

      
    );
};

export default App;

