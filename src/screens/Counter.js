import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import allAction from '../Redux/Action'
import {useDispatch, useSelector} from 'react-redux'

const Counter = () =>{
    const dispatch = useDispatch();
    
    const count = useSelector(state => state.key.counter)

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <View style={{
                    width: 300,
                    height:50,
                    backgroundColor:'#FC3A89'
                }}>
                    <TouchableOpacity onPress={()=> dispatch(allAction.action.incrementAction())}>
                        <Text style={{
                            fontSize:15,
                            color:'#FFF',
                            alignSelf:'center',
                            marginTop:15
                        }}>I N C R E M E N T</Text>
                    </TouchableOpacity>    
                </View>

                <View style={{
                    width: 300,
                    height:50,
                    backgroundColor:'#FC3A89',
                    marginTop:25
                
                }}>
                    <TouchableOpacity onPress={()=> dispatch(allAction.action.decrementAction())}>
                        <Text style={{
                            fontSize:15,
                            color:'#FFF',
                            alignSelf:'center',
                            marginTop:15
                        }}>D E C R E M E N T</Text>
                    </TouchableOpacity>    
                </View>

                <View style={{
                    width:300,
                    height:50,
                    backgroundColor:'#FFF',
                    marginTop:25
                }}>
                   <Text style={{
                       fontSize: 15,
                       alignSelf:'center',
                       marginTop:15,
                       color: '#000'
                   }}>
                       {count}
                   </Text>
                </View>
        </View>
    )
}

export default Counter;