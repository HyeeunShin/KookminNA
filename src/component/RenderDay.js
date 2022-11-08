import {StyleSheet, View, Text, TouchableOpacity, Button, ProgressViewIOSComponent} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Motion } from "@legendapp/motion"
import NotifService from '../utilities/Notification/NotifService';

const RenderDay = props => {

  const colorType = props.color;
  const [alarm, setAlarm] = useState(false);
  const [press, setPress] = useState(false);

  // props.setData([1])
  // console.log(props.data)
  let notif = new NotifService();

  useEffect(() => {
    notif = new NotifService(
      onRegister.bind(this),
      onNotifRecieve.bind(this)
    );
    
// props.data.filter(it => it.scheduleName == props.scheduleName)
    if(props.data !== [] &&  props.scheduleName in props.data){
      console.log(props.data.scheduleName)
      console.log(props.scheduleName)
      setAlarm(true)
    }
  })

  function onRegister(token) {

    //save token or anything
  }
function onNotifRecieve(notification) {

  //on receiving notif
  Alert.alert(notification.title, notification.message)
  notificationAction(notification.id)
}

function sendRandomScheduleNotif(day,item) {
  setAlarm(!alarm)
  props.setData([item])
  console.log('item.data',item.data, 'item',item)
  // const date = new Date(day.split('-')[0], parseInt(day.split('-')[1]) - 1, day.split('-')[2], item.time.split(':')[0], item.time.split(':')[1]);
  const date = new Date(Date.now() + 10 * 100)
  notif.scheduleNotif('알림', date, item.scheduleName, item.name);
  console.log(date, item.scheduleName, item.name)
  // notif.scheduleNotif('알림', date.toISOString(), item.name, route.params.nPoly);

}

  return (
    <>
        <View style={[styles.container,{borderColor:colorType}]}>
            <View style={{flexDirection: 'row', marginBottom: 4, marginTop: 4}}>
              <Text style={styles.text1}>{props.scheduleTime}</Text>
            </View>
                
            <Text style={styles.text2}>{props.scheduleName}</Text>
            <Text style={styles.text3}>{props.schedulePlace}</Text>
          </View>
    </>
  );
};

export default RenderDay;

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 12,
    borderLeftWidth: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    padding: 10,
    paddingLeft: 15,
  },

  text1: {
    color: '#8F9BB3',
    fontSize: 12,
    fontWeight: '600',
  },
  text2: {
    color: '#000',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
  },
  text3: {
    color: '#8F9BB3',
    fontSize: 14,
    lineHeight: 28,
  },
  containerBtn: {
    position:'absolute',
    flex: 1,
    margin: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    height: '80%',
    width: '20%',
    right:0,
    justifyContent:'space-around'
  },
});
