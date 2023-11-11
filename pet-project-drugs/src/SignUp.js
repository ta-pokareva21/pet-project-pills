import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";


export default function SignUp(){
    const [text1, onChangeText1] = useState('');
    const [text2, onChangeText2] = useState('');
    const [text3, onChangeText3] = useState('');
    const [number, onChangeNumber] = useState('');
    const navigation = useNavigation();
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

