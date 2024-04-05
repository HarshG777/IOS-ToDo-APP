
import { useState } from 'react';
import {  StyleSheet, View,FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  
  const [goalarray,setarray] = useState([]);


  function btnPress(enterText){
    setarray((currentgoal)=>[...goalarray,{text:enterText,id:Math.random().toString()}])
  
  }

  function deleter(id){
    setarray((currentgoal) =>{
      return goalarray.filter((goal)=> goal.id !== id)
    })
  }


  return (
    <View style = {styles.contaner}>

      <GoalInput addGoal={btnPress} />
      
      <View style={styles.goaldiv}>

        <FlatList data={goalarray} renderItem={(dataitem )=>{
          return <GoalItem text={dataitem.item.text} id = {dataitem.item.id}  deleteItem={deleter}/>
        }}

        keyExtractor={(item,index)=>{
          return item.id
        }}
        alwaysBounceVertical={false}/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  contaner:{
    flex:1,
    flexDirection:'column',
    paddingTop:60,
    paddingHorizontal:30,
    backgroundColor:"#B8D8",
  },
 
  goaldiv:{
    flex:6,

  },
 
});

