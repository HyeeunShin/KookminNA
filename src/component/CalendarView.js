import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import { getCalendarDateString } from 'react-native-calendars/src/services';
import {Card} from 'react-native-paper';
import RenderDay from './RenderDay';

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

const CalendarView = () => {
  const [items, setItems] = React.useState({
    '2022-10-21': [{
      name: 'Item for 2022-10-21 #',
      day: '2022-10-21',
    }]
  });
  // items['2022-10-21'] = [];
  // items['2022-10-21'].push({
  //   name: 'Item for 2022-10-21 #',
  //   day: '2022-10-21',
  // })

  console.log(items)

  const [newItems, setNewItems] = React.useState({});


  // 달마다 업데이트 하는 느낌? 인데 왜 난 그렇게 사용하고 있지 않지? 무한 렌더링하는 이유?
  const loadItems = day => {
    console.log('loadItems');

    const time = day.timestamp;
    const strTime = timeToString(time);
    
    const newItems = {}
    Object.keys(items).forEach(key => {
      newItems[key] = items[key];
    });
    if (!items[strTime]) {
      newItems[strTime] = [];
      newItems[strTime].push({
        name: 'Item for ' + strTime + ' #',
        day: strTime,
      })
    }
    setNewItems(newItems);
};

  const renderItem = item => {
    if (!items[item.day]){
      return(
        <View style={styles.none}>
          <Text style={styles.noneText}>일정이 없습니다.</Text>
        </View>
      )
    }

    return (
      <RenderDay
        scheduleTime={'10:00-13:00'}
        schedulePlace={'국회의원 화장실'}
        scheduleName={'국회의원 회의'}
        color={'purple'}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        style={styles.calendar}
        items={newItems}
        renderItem={renderItem}
        loadItemsForMonth={loadItems}
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
      />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
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