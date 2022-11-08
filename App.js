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
import { Image, View, Text} from 'react-native';
const App = () => {

  const Stack = createStackNavigator();

    const [schedule, setSchedule] = useState(null)
    const getScheduleInfo = async () => {
      await api
        .getSchedule()
          .then((data) =>{
            setSchedule(data);
            })
          .catch((error) => console.log(error));
      }

    const [information, setInformation] = useState(null)
    const getInformation = async () => {
      await api
        .getInform()
          .then((data) => {
            setInformation(data);
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
    <InformContext.Provider value = {information}>
      <snsContext.Provider value = {snsInform}> 
        <AppContext.Provider value = {schedule} >
          <NavigationContainer>

              <Stack.Navigator
                initialRouteName='Start'
                screenOptions={() => ({
                    headerTitleStyle:{
                      color:'#2B65B4', fontSize: 17, fontWeight: 'bold'
                    },
                  })}>
                <Stack.Screen options={{headerShown: false}} name='Name' component={NameSearch}/>
                <Stack.Screen 
                  options={({route}) => (
                    {headerTitle :  '국회의원 일정 - ' + route.params.name , headerTitleAlign: "center",
                    headerRight : () => (
                      <Image
                      source = {{ uri : `https://www.assembly.go.kr/static/portal/img/openassm/${route.params.code}.jpg`}}
                      style = {{     
                        width: 40 , height: 40,
                        borderRadius: 99, borderWidth: 3, borderColor: '#2B65B4', marginRight: 20
                      }} />), })}
                    name='Calendar'
                    component={CalendarView}/>
                  {/* children={({navigation})=><CalendarView name={name} setName={setName} navigation={navigation}/>}/> */}
                <Stack.Screen
                  options={{
                    title : "",
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

