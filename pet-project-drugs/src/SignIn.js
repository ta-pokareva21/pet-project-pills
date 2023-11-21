import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
//import setState from "setstate";
import usersData from './users.json'


export default function SignIn(){

        const state = {
            isAuthenticated: false
        }

        const [text, onChangeText] = useState('');
        const [number, onChangeNumber] = useState('');
        const navigation = useNavigation();

        const handleAutorization1 = async () => {
            try{
                const user = await AsyncStorage.getItem('user');
                const parsedUser = JSON.parse(user);
                if (parsedUser.login === text && parsedUser.password === number){
                    state.isAuthenticated = true
                }
                else{
                    state.isAuthenticated = false
                    Alert.alert('Ошибка авторизации')
                }
            } catch (error) {
                Alert.alert('Ошибка авторизации')
            }
        };

        // Функция для проверки правильности логина и пароля
        // const checkAuthentication = () => {
        //     //const { username, password } = state;
        //     const username = text
        //     const password = number
    
        //     // Проверяем, введены ли данные
        //     if (!username || !password) {
        //         return;
        //     }
      
        //     usersData.forEach((user) => {
        //         if (user.username === username && user.password === password) {
        //             state.isAuthenticated = true;
        //         }
        //     });
        //  }



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
                        // onChangeText={(username) => onChangeText(username, 'username')}
                        // value={state.username}
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
                        // onChangeText={(password) => onChangeText(password, 'password')}
                        // value={state.password}
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
                      onPress={() => {
                        handleAutorization1()
                        if(state.isAuthenticated !== false){
                            navigation.navigate('Home')
                            Alert.alert('Вы успешно авторизованы')
                        } 
                    }}
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
  
