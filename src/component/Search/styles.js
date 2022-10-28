import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


  container: {
    height:'50%',
    
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
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 10
  },
  flatListTextProfile:{
    flexDirection:"column",
    marginLeft: 10,
    width: '70%'
  },
  flatListImageProfile: {
    width: 60,
    height: 60,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: '#2B65B4',
    marginBottom: 12
  },
  star:{
    width: 20,
    height: 20,
    position: 'absolute',
    right: -1,
    top: -5,
    // margin: 8
  },

  assemblyListBar : {
   
  },
  imageContainer: {
    marginTop: '10%',
    marginLeft: '6.25%',
    marginRight:'6.25%',
    width: '87.5%',
    height : '12.5%',
    backgroundColor: '#FFFFFF',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    
    marginTop:'4%',
    width : '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 20,
    marginLeft: '5%',
    marginRight: '5%',
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: '#3060B0',
    backgroundColor: '#FFFFFF',
  },
  
  textName:{
    fontSize:17,
    fontWeight: "800",
    lineHeight: 20
  },

  textPoly:{
    fontSize:14,
    color: '#3060B0',
    fontWeight: "800",

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
    marginBottom: 12
  },
 star:{
    width: 30,
    height: 30,
    position: 'absolute',
    right: -5,
    top: -5,
    // margin: 8
  }

});
export default styles;

