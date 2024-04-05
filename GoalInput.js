import {StyleSheet, View, TextInput, Button} from 'react-native'
import { useState } from 'react';



function GoalInput(props){

  const [enterText,setText] = useState('');

  function inputHandler(text){
    setText(text);
  }

  function thisGoal(){
    props.addGoal(enterText)
    setText('')
  }

    return(

    <View style={styles.top}>
        <TextInput style={styles.inputText} placeholder='Enter Goal' onChangeText={inputHandler} value={enterText}/>
        <Button title='Add Goal'onPress={thisGoal}/>
    </View>

    );

}

export default GoalInput;

const styles = StyleSheet.create({
    top:{
        alignItems:'center',
        flexDirection:'row',
        flex:1,
        marginBottom:10,
        justifyContent:'space-between',
        borderBottomWidth:2,
        borderBottomColor:"gray",
      },
      inputText:{
        width:"70%",
        height:40,
        borderWidth:2,
        color:'bakck',
        borderColor:'#F1F0EC',
        backgroundColor:"#6584",
        padding:5,
      },
})