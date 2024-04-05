import {StyleSheet, View,Text, Pressable} from 'react-native';

function GoalItem(prop){


    return(

        
        <View style={styles.goaldata}>
            <Pressable onPress={prop.deleteItem.bind(this,prop.id)}>
                <Text>{prop.text}</Text>
            </Pressable>
        </View>
        
        
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goaldata:{
        padding:10,
        borderWidth:2,
        borderColor:'gray',
        marginTop:5,
        backgroundColor:'#EEF5',
        borderRadius:10,
      },
})