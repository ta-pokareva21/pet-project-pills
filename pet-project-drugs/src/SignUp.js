import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'


import usersData from './users.json'




export default function SignUp(){

    const state = {
        isRegisteted: false
    }

   //const fs = require(RNFS)
//    let rawdata = RNFS.readFileSync('users.json') // Читаем файл.
//    let parseddata= JSON.parse(rawdata) 

    const [text1, onChangeText1] = useState('');
    const [text2, onChangeText2] = useState('');
    const [text3, onChangeText3] = useState('');
    const [number, onChangeNumber] = useState('');
    const navigation = useNavigation();

    const handleRegister = async () => {
        try{
            await AsyncStorage.setItem('user', JSON.stringify({
                username: text1,
                usersurname: text2,
                login: text3,
                password: number
            }));
            
            state.isRegisteted = true
        } catch (error) {
            Alert.alert('Ошибка регистрации: ' + error.message)
        }
    };
 
    // const checkRegistration = () => {
    //     //const { username, password } = state;
    //     const name = text1
    //     const surname = text2
    //     const username = text3
    //     const password = number

    //     // Проверяем, введены ли данные
    //     if (!name || !surname || !username || !password) {
    //         return;
    //     }
  
    //     usersData.forEach((user) => {
    //         if (user.name === name && user.surname === surname && user.username === username && user.password === password) {
    //             state.isRegisteted = true;
    //         }
    //         else {
    //             state.isRegisteted = false
    //         }
    //     });
    //  }


    return (
        <View style={styles.container}>
            <View >
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Image 
                        source={require('./pictures/blueArrow.png')} 
                        style={styles.picture}
                        resizeMode='stretch'  
                        />
                </TouchableOpacity>
            </View>
            
            <View style={styles.textBlock}>
                <Text style={styles.text}>Регистрация</Text>
            </View>

            <SafeAreaView style={styles.safeAreaStyle}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText1}
                    value={text1}
                    placeholder="Имя"
                    keybordType="email-address"
                    editable
                    maxLength={20}
                    minLength={1}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={text2}
                    placeholder="Фамилия"
                    keybordType="email-address"
                    editable
                    maxLength={30}
                    minLength={1}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText3}
                    value={text3}
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
                  title={'Зарегистрироваться'}
                  color={'#ffffff'}
                  onPress={() => {handleRegister()
                    if (state.isRegisteted === true){
                        navigation.navigate('Home')
                        Alert.alert('Вы успешно зарегистрированы!')
                    }
                }


                    // checkRegistration();
                    // if(state.isRegisteted !== true){
                    //     usersData.push({"username": text3, "password": number})
                    //     writeFile('users.json', usersData.toString, 'utf8')
                    //     navigation.navigate('Home')
                        //fs.writeFileSync('users.json', data);
                        //RNFS.writeFile('users.json' ,  JSON.stringify({"name": text1, "surname": text2, "username": text3, "password": number}))
                        // navigation.navigate('Home')
                    // }else{

                    // }
                  
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
    top: 10
},

outter: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    width: '60%',
    height: '6%', 
    backgroundColor: '#00305D',
    borderRadius: 24,
    top: -30,
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
    top: -80,
},

picture: {
    top: 20,
    left: -135,
    width: 32,
    height: 27
}

});

