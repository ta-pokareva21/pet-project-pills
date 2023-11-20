import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";


export default function Home(){
 
    //const navigation = useNavigation();
    return (
        <View style={styles.container}>
          
            
            <View style={styles.textBlock}>
                <Text style={styles.text}>ого, мы зашли</Text>
            </View>

            
            <View style={styles.outter} activeOpacity={1}>
                <Button 
                  title={'юху'}
                  color={'#ffffff'}
                  onPress={() => 
                    navigation.navigate('PermissionsNotification')
                  }
                />
            </View>
        </View>    
    );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#ffffff',
  alignItems: 'center',
  justifyContent: 'space-around',
},

text: {
    color: '#00305D',
    fontSize: 22,
    textAlign: 'center',
    top: 100
},

outter: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    width: '60%',
    height: '6%', 
    backgroundColor: '#00305D',
    borderRadius: 24,
    top: 40,
    marginBottom: '15%'
},

safeAreaStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
},

input: {
    width: 300,
    borderBottomColor:'#00305D',
    borderBottomWidth: 1.5,
    marginBottom: 35,
    fontSize: 20,
    top: 10,
},

picture: {
    top: 20,
    left: -135,
    width: 32,
    height: 27
}

});