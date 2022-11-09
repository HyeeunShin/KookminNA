import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


  container: {
    height:'100%',
    
  },
  poly: {
    color: '#3060B0',
    fontSize: 10,
  },
  Hname: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 'bold'
  },
  Ename: {
    fontSize: 10,
    lineHeight: 20,
    marginRight: 4
  },
  birth: {
    fontSize: 8,
    marginTop: 2,
    lineHeight: 20
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: '#2B65B4',
    marginBottom: 12
  },
  flatListProfile:{
    width:'100%',
    flexDirection: 'row',
    padding: 15,
    justifyContent:'space-between',
  },
  flatListTextProfile_Left:{
    flexDirection:"column",
    alignItems:'flex-start',
    marginLeft: 10,
  },
  flatListTextProfile_Right:{
    flexDirection:'row',
  },
  flatListImageProfile: {
    width: '16%',
    height: 60,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: '#2B65B4',
    marginBottom: 12
  },
  star:{
    flex:2,
    width: 20,
    height: 20,
    position: 'absolute',
    right: -1,
    top: -5,
    zIndex:2
    // margin: 8
  },

  assemblyListBar : {
   
  },
  imageContainer: {
    // marginTop: '20%',
    // marginLeft: '6.25%',
    // marginRight:'6.25%',
    // width: '87.5%',
    // height : '12.5%',
    // backgroundColor: '#FFFFFF',
  },
  itemStyle: {
    padding: 10,
  },
  textName:{
    fontSize:17,
    fontWeight: "bold",
    lineHeight: 20
  },

  textPoly:{
    fontSize:14,
    color: '#3060B0',
    fontWeight: "bold",

  },
  textInput: {
    fontSize:18,
    marginBottom:20,
    
  },
  row: {
    marginLeft: "0.1%",
    flexDirection: 'row'
},
mark: {
    color: '#3060B0',
    fontSize: 28,
    fontWeight: 'bold'
},
title: {
    fontSize: 15,
    lineHeight: 40
},
 profile: {
    width: 50,
    height: 50,
    borderRadius: 99,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#2B65B4',
  },
 star:{
    width: 30,
    height: 30,
    position: 'absolute',
    right: 0,
    bottom:0,
    // margin: 8
  },
  // navContainer: {
  //   height: HEADER_HEIGHT,
  // },
  // statusBar: {
  //   height: STATUS_BAR_HEIGHT,
  // },

  titleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  textInputStyle: {  
    flexDirection:'row',
    alignContent:'center',
    width : '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: '#3060B0',
    backgroundColor: '#FFFFFF',
  },
  magnify : {
    position: 'absolute',
    top:0,
    right: 0,
    width: 25,
    height: 25,
    margin: 10
  }
});
export default styles;

