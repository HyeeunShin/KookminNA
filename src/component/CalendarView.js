import React, {useState, useEffect, useContext, useRef} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Alert,
  Image

} from 'react-native';
import RoundBtn from './RoundBtn';
import userDataStorage from '../user/userDataStorage';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import RenderDay from './RenderDay';
import * as api from '../api/server';
import AppContext from '../../src/store';
import BottomSheet from './BottomSheet';
import NotifService from '../utilities/Notification/NotifService';


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
  const [alarmTable, setAlarmTable] = useState([]);
  const [items, setItems] = useState();
  const [markedDates, setMarkedDates]= useState();
  const [newItems, setNewItems] = useState({});
  const [selectedDay, setSelectedDay] = useState({});
  const [alarm, setAlarm] = useState([])
  const [show, setShow] = useState(false);


  useEffect(() => {
    userDataStorage.get("alarmTable").then(setAlarmTable).catch(console.error);

  }, []);
  useEffect(() => {
    userDataStorage.set("alarmTable", alarmTable).catch(console.error);
    console.log("setAlarm",alarmTable)
  }, [alarmTable]);

  let notif = new NotifService();

  useEffect(() => {

    notif = new NotifService(
      onRegister.bind(this),
      onNotifRecieve.bind(this)
    );

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

  function onRegister(token) {

    //save token or anything
  }
function onNotifRecieve(notification) {

  //on receiving notif
  Alert.alert(notification.title, notification.message)
  notificationAction(notification.id)
}

function sendRandomScheduleNotif(day,title, name) {
  console.log(day, title, name)
  // const date = new Date(day.split('-')[0], parseInt(day.split('-')[1]) - 1, day.split('-')[2], item.time.split(':')[0], item.time.split(':')[1]);
  const date = new Date(Date.now() + 10 * 100)
  notif.scheduleNotif('알림', date, title, name);
  // notif.scheduleNotif('알림', date.toISOString(), title, name);

}

  const saveNameAndAlarm = (item, name) =>{
    const table = {"date": item.date, "name":item.name,"time":item.time, "nPoly":name};
    {JSON.stringify(alarmTable).indexOf(JSON.stringify(table)) > -1 ?
      setShow(!show)
      :
      Alert.alert(
        '알림을 설정하시겠습니까?',
        '해당 일정이 시작되는 시간으로 알림이 설정됩니다.',
        [
          {text:'취소', style:'cancel'},
          {
            text:'예약',
            style:'destructive',
            onPress: () => {
              sendRandomScheduleNotif(table.date,table.name,table.nPoly)
              setAlarmTable([...alarmTable,table]);
              setShow(!show)
            }
          }
        ]
      )
    }
  }



const renderItem = (item, index) => {
  if(!item.name){
      return(
      <View style={styles.none}>
        <Text style={styles.noneText}>일정이 없습니다.</Text>
      </View>
    )
  }

  const handleOpen = (item, nPoly, data, setData) => {
    saveNameAndAlarm(item, nPoly)
  }
    return (
      <TouchableOpacity onPress={() => handleOpen(item, route.params.nPoly, show, setShow)}> 
        <RenderDay
            scheduleTime={item.time}
            schedulePlace={item.place}
            scheduleName={item.name}
            color={item.type.color}
            date={item.date}
            name={route.params.nPoly}
            data={alarm}
            setData={setAlarm}
          />
      </TouchableOpacity>
    )

  };

  

  return (
    <>
      {show && <BottomSheet data={show} setData={setShow} alarm={alarmTable} setAlarm={setAlarmTable}/>}
      {!show && <RoundBtn data={show} setData={setShow}/>}
      <View style={styles.container}>
        <Agenda
          style={styles.calendar}
          items={newItems}
          renderItem= {renderItem}
          markingType={'multi-dot'}
          markedDates={markedDates}
          showClosingKnob={true}
          theme={{
            backgroundColor: '#ffffff',
            'stylesheet.calendar.header': {
              monthText: {
                fontSize: 22,
                fontWeight: 'bold',
                margin: '2%',
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
        <StatusBar/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  calendar: {
    borderBottomColor: '#e0e0e0',
    // width: '100%',
    // height: '100%',
    position:'relative'
  },

  circleImg: {
    width: 90,
    height: 90,
    borderRadius: 100,
    left: 20,
    top : '-100%',
    borderWidth: 4,
    borderColor: '#fff'

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
    
  },  
});

export default CalendarView;