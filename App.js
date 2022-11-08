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
import InformContext from './src/stores/store2.js';
import snsContext from './src/stores/store3.js';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  const Stack = createStackNavigator();

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
    const getInformation = async () => {
      await api
        .getInform()
          .then((data) => {
            setInformation(data);
            // console.log(information)
          })
          .catch((error) => console.log(error))
    }

    const [snsInform, setSnsInform] = useState(null)

    const getSnsInform = async () => {
      await api
        .getSns()
          .then((data) => {
            setSnsInform(data);
          
          }) 
          .catch((error) => console.log(error))
    }

    useEffect(()=>{
      getScheduleInfo()
      getInformation()
      getSnsInform() 
      
      if (schedule !== null && information !== null && snsInform !== null)
      {
        SplashScreen.hide()
      }    
  
  },[schedule])

  return (
    // <Example/>
    <InformContext.Provider value = {information}>
      <snsContext.Provider value = {snsInform}> 
        <AppContext.Provider value = {schedule} >
          <NavigationContainer>

              <Stack.Navigator
                initialRouteName='Start'
                screenOptions={() => ({
                    headerTitleStyle:{
                      color:'#fff',
                    },
                  })}>
                <Stack.Screen options={{headerShown: true}} name='Name' component={NameSearch}/>
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
      </snsContext.Provider>
  </InformContext.Provider>
      
    );
};

export default App;

