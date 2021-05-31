import React from 'react';
import {View, Text , StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Provider} from 'react-redux'
import store from './src/Redux/Store'

import Counter from './src/screens/Counter';


function HomeScreen({navigation}){
    return(
        <ScrollView style={{flex: 1, marginTop:50}}>

            <View style={styles.viewButton}>
              <TouchableOpacity onPress={()=> navigation.navigate('Counter')}>
                <Text style={styles.viewText}>Counter</Text>
              </TouchableOpacity>
            </View>

        </ScrollView>
    );
} 

const styles = StyleSheet.create({
  viewButton:{
    width:280,
    height: 50,
    alignSelf: 'center',
    marginTop: 25,
    borderRadius:60,
    backgroundColor: '#2F2B33'
  },
  viewText:{
        fontSize:15,
        color:'#FC3A89',
        alignSelf:'center',
        marginTop: 15

  }
})

const Stack = createStackNavigator();

function App(){
  return(
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Counter" component={Counter}/>
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>  
  )
}

export default App;
