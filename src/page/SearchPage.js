import React, {useState, useRef, useEffect} from 'react';
import {Text, View, Dimensions, Image, StyleSheet, SafeAreaView} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CardProfile from '../component/CardProfile';
import Title from '../component/Title';
import  userDataStorage from '../user/userDataStorage';


export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.3);


const SearchPage = (props) => {

  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  
  return (
    <SafeAreaView>
      <Title name={'관심 국회의원'}/>
      <View style={{
        alignItems: 'center',
        }}>
        <Carousel
          ref={isCarousel} 
          data={props.selectedName}
          renderItem={(item) => CardProfile(item, props.setSelectedName, props.selectedName, props.navigation)}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          sliderHeight={SLIDER_WIDTH*0.3}
          itemHeight={ITEM_WIDTH*2}
          onSnapToItem={index => setIndex(index)}
        />        
      </View>

    </SafeAreaView>
  );
};

export default SearchPage;