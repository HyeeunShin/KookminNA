import React, {useState} from 'react';
import {format} from 'date-fns';
import {CalendarList, LocaleConfig, Agenda} from 'react-native-calendars';
import {StyleSheet, View, Card} from 'react-native';

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

function CalendarView() {
  const type_1 = {
    key: 'type_1',
    color: '#00B383',
    selectedDotColor: '#00B383',
  };
  const type_2 = {
    key: 'type_2',
    color: '#0095FF',
    selectedDotColor: '#0095FF',
  };

  const posts = [
    {
      id: 1,
      type: [type_1],
      title: 'title1',
      contents: 'contents1',
      date: '2022-10-26',
    },
    {
      id: 2,
      type: [type_2],
      title: 'title2',
      contents: 'contents2',
      date: '2022-10-27',
    },
    {
      id: 3,
      type: [type_1, type_2],
      title: 'title3',
      contents: 'contents3',
      date: '2022-10-27',
    },
    {
      id: 4,
      type: [type_1, type_2],
      title: 'title4',
      contents: 'contents4',
      date: '2022-11-11',
    },
  ];

  //일정 dots[arr[current.type]
  const markedDates = posts.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true, dots: current.type};
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  //selectedDay
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
      dotColor: '#3060B0',
    },
  };

  const renderDay = item => {
    console.log(item);
    // return <View>{item}</View>;
  };

  // console.log(selectedDate);

  return (
    <>
      <Agenda
        style={styles.calendar}
        markingType={'multi-dot'}
        items={markedSelectedDates}
        markedDates={markedSelectedDates}
        renderDay={renderDay}
        // loadItemsForMonth={loadItems}
        // hideExtraDays={false}
        theme={{
          // ...calendarTheme,
          backgroundColor: '#ffffff',
          'stylesheet.calendar.header': {
            monthText: {
              fontSize: 22,
              fontWeight: 'bold',
              margin: 10,
              textAlign: 'left',
              width: '100%',
              position: 'relative',
              left: -10,
            },
            dayText: {
              color: 'black',
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
          setSelectedDate(day.dateString);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottom: 10,
    borderBottomColor: '#e0e0e0',
    width: '100%',
    height: '100%',
  },
});

export default CalendarView;
