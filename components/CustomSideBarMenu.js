import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View>
               <View>
                   <DrawerItems  {...this.props }  />
               </View>
               <View>
                    <TouchableOpacity
                    onPress = {()=>{this.props.navigation.navigate('Welcome')
                               firebase.auth().signOut()
                }}
                    >
                        <Text> LOGOUT </Text>                        
                        </TouchableOpacity>
               </View>
            </View>
        );
    }
}