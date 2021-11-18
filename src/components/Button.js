import React from "react";
import { 
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight
} from  'react-native'

const styles = StyleSheet.create({
    button : {
      fontSize:40,
      height: Dimensions.get('window').width/4,
      width: Dimensions.get('window').width / 4,
      padding: 20,
      backgroundColor: '#e7ceedad',
      textAlign:'center',
      borderWidth:1,
      borderColor: '#502b58',
    
    }
})

export default props => {
  return (
    <TouchableHighlight onPress = {props.onClick}>
      <Text style = { styles.button}> {props.label}</Text>
    </TouchableHighlight>
  )
}