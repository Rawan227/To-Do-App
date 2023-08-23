
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {About} from './About'
import{Daily} from'./Daily'
import{Future} from './Future'
import{Extra}from'./Extra'
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const Home=({navigation})=>{
  return(
    <SafeAreaView style={style.container}>
      <Text style={style.text}>
        Hi,there.
      </Text>
      <Text style={style.text}> 
        Add your Tasks!
      </Text>
      <View>
      <TouchableOpacity onPress={ () => navigation.navigate('About')}>
                <Text style={style.button}> About </Text>
            </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('DailyTasks')}>
                <Text style={style.button}> Daily Tasks </Text>
            </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('FutureTasks')}>
                <Text style={style.button}> Future Tasks </Text>
            </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('ExtraTasks')}>
                <Text style={style.button}> Extra Tasks</Text>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="DailyTasks" component={Daily} />
        <Stack.Screen name="FutureTasks" component={Future} />
        <Stack.Screen name="ExtraTasks" component={Extra} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style=StyleSheet.create({
  container : {
      flex: 1,
      backgroundColor: 'white',
      alignItems:'center',
      justifyContent:'space-around',

  },
  text:
  {
    color:'#ff9933',
    fontSize:40,
    padding:10,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center',
  },
  ButtonsWrapper:
  {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  button:
  {
    margin:5,
    fontSize:30,
    backgroundColor:'#000',
    color:'white',
    borderRadius:10,
    textAlign:'center'
  }

});