import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";


export default function SignIn(){
        const [text, onChangeText] = useState('');
        const [number, onChangeNumber] = useState('');
        const navigation = useNavigation();
        return (
            <View style={styles.container}>
                <View style={styles.textBlock}>
                    <Text style={styles.text}>Вход в приложение</Text>
                </View>

                <SafeAreaView style={styles.safeAreaStyle}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Логин"
                        keybordType="email-address"
                        editable
                        maxLength={8}
                        minLength={4}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Пароль"
                        keybordType="email-address"
                        editable
                        maxLength={12}
                        minLength={4}
                        secureTextEntry={true}
                    />
                </SafeAreaView>

                

                <View style={styles.outter} activeOpacity={1}>
                    <Button 
                      title={'Войти'}
                      color={'#ffffff'}
                      onPress={() => 
                        navigation.navigate('PermissionsNotification')
                      }
                    />
                </View>

                <View >
                    <Button 
                      title={'Зарегистрироваться'}
                      color={'#00305D'}
                      onPress={() => 
                        navigation.navigate('SignUp')
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
        top: 200
    },

    outter: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 50,
        width: '50%',
        height: '6%', 
        backgroundColor: '#00305D',
        borderRadius: 24,
        top: 110,
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
        top: 90,
    }


  
  });
  
