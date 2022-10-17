import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  assemblyListBar_image: {
    width:3,
    height:17,
  },
  assemblyListBar : {
    flexDirection: 'row',
    alignItems : 'flex-start'
  }

  ,
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',


  },
  imageContainer: {
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    marginTop: 30,
    width : 334,
    height: 40,
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#3060B0',
    backgroundColor: '#FFFFFF',
  },
  
  textName:{
    fontSize:17,
    marginLeft:10,
    fontWeight: "600",

  },
  textInput: {
    fontSize:18,
    marginBottom:20,
    
  },
// row : {
//     flexDirection : 'row',
//     alignItems : 'center',
//     paddingVertical : 15,
//     borderBottomWidth : 1,
//     borderColor : 'lightgrey',
// },



});
export default styles;

