import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, StyleSheet, SafeAreaView} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CardProfile from '../component/CardProfile';
import Title from '../component/Title'

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.3);


const SearchPage = () => {

  const [data, setData] = useState([
    {
    id: 0,
    poly: "국민의 힘",
    name: "주호영 (朱豪英)",
    ename: 'JOO HOYOUNG',
    birth: '1960-12-10',
    imgUrl: 'https://www.assembly.go.kr/static/portal/img/openassm/14M56632.jpg',
    },
  {
    id: 1,
    poly: "국민의 힘",
    name: "김채환 (朱豪英)",
    ename: 'JOO HOYOUNG',
    birth: '1960-12-10',
    imgUrl: 'https://www.assembly.go.kr/static/portal/img/openassm/14M56632.jpg',
  },
  {
    id: 2,
    poly: "국민의 힘",
    name: "신혜은 (朱豪英)",
    ename: 'JOO HOYOUNG',
    birth: '1960-12-10',
    imgUrl: 'https://www.assembly.go.kr/static/portal/img/openassm/14M56632.jpg',
  },
  {
    id: 3,
    poly: "국민의 힘",
    name: "백소현 (朱豪英)",
    ename: 'JOO HOYOUNG',
    birth: '1960-12-10',
    imgUrl: 'https://www.assembly.go.kr/static/portal/img/openassm/14M56632.jpg',
  }
])
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
          data={data}
          renderItem={(item) => CardProfile(item, setData, data)}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          // sliderHeight={SLIDER_WIDTH*0.3}
          // itemHeight={ITEM_WIDTH*2}

          onSnapToItem={index => setIndex(index)}
        />
      </View>

    </SafeAreaView>
    
  );
};

export default SearchPage;