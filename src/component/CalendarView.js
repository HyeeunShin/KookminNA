import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
// import AppContext from '../../App'
import {Agenda, LocaleConfig} from 'react-native-calendars';
import { getCalendarDateString } from 'react-native-calendars/src/services';
import RenderDay from './RenderDay';
import * as api from '../api/server';
import AppContext from '../../src/store';

LocaleConfig.locales.fr = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'fr';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const CalendarView = ({navigation: {navigate}, route}) => {
  
  const app = useContext(AppContext);

  const [items, setItems] = useState();
  const [markedDates, setMarkedDates]= useState();
  const [newItems, setNewItems] = useState({});
  const [selectedDay, setSelectedDay] = useState({});

  useEffect(() => {
    setItems(app[0][route.params.id][route.params.nPoly])
    setMarkedDates(app[1][route.params.id][route.params.nPoly])
      
    const date = new Date();
    const today = date.toISOString().split('T')[0];
    setSelectedDay(today)
    if (items !== undefined){
      if (!items[today]) {
            const newItem = {
              [today]:[{
                name: false,
                date: today,
              }]
            }
            setNewItems(newItem);
          }
          else {
            const newItem = {
              [today]:items[today]
            }
            setNewItems(newItem);
          }
    }
    
  },[items])


  const renderItem = (item) => {
    if(!item.name){
       return(
        <View style={styles.none}>
          <Text style={styles.noneText}>일정이 없습니다.</Text>
        </View>
      )
    }

    return (
          <RenderDay
            scheduleTime={item.time}
            schedulePlace={item.place}
            scheduleName={item.name}
            color={item.type.color}
          />
        )

  };

  

  return (
      <View style={styles.container}>
        <Agenda
          style={styles.calendar}
          items={newItems}
          renderItem={renderItem}
          markingType={'multi-dot'}
          markedDates={markedDates}
          showClosingKnob={true}
          theme={{
            backgroundColor: '#ffffff',
            'stylesheet.calendar.header': {
              monthText: {
                fontSize: 22,
                fontWeight: 'bold',
                margin: 10,
                textAlign: 'left',
                width: '100%',
                left: -10,
              },

              dayTextAtIndex0: {
                color: '#8C3F3F',
              },
              dayTextAtIndex6: {
                color: '#3060B0',
              },
            },
            dotColor: '#3060B0',
            todayTextColor: '#3060B0',
            selectedDayBackgroundColor: '#3060B0',
          }}
          monthFormat={'M월, yyyy'}
          onDayPress={day => {
            const time = day.timestamp;
            const strTime = timeToString(time);

            setSelectedDay(strTime)

            if (!items[strTime]) {
              const newItem = {
                [strTime]:[{
                  name: false,
                  date: strTime,
                }]
              }
              setNewItems(newItem);
            }
            else {
              const newItem = {
                [strTime]: items[strTime]
              }
              setNewItems(newItem);
            }
          }
        }
        />
        <StatusBar />
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  calendar: {
    borderBottom: 10,
    borderBottomColor: '#e0e0e0',
    width: '100%',
    height: '100%',
  },

  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },

  none: {
    flex: 1,
    height: '20%',
    backgroundColor: '#fff',
    opacity: 0.6,
    margin: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    padding: 10,
    paddingLeft: 15,
    justifyContent: 'space-around',
    marginTop: 20
  },
  noneText: {
    color: '#000',
    
  }
});

export default CalendarView;