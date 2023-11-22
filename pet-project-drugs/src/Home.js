import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView,
    ScrollView,TextInput, TouchableOpacity, StatusBar} from 'react-native';

//import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";




export default function Home(){

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.textBlock1}>
                <Image source={require('./pictures/guest.png')} style={styles.picture1}/>

                <Image source={require('./pictures/plus.png')} style={styles.picture2}/>
            </View>



            <Image source={require('./pictures/nopills.png')} style={styles.picture}/>

            <View style={styles.textBlock}>
                <Text style={styles.text}>Нет медикаментов на{"\n"}сегодня</Text>
            </View>



           <View style={styles.navbar1}>
                <View style={styles.blok}>
                   
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                       
                            <Image 
                            source={require('./pictures/home.png')} 
                            style={styles.picturenavbar}
                            resizeMode='stretch'  
                            />
                        <Text style={styles.navbartext}>Главная</Text>
                        
                        
                    </TouchableOpacity>
                </View> 
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.drugsandauther}>
                        <Image 
                            source={require('./pictures/pills.png')} 
                            style={styles.picturenavbar}
                            resizeMode='stretch'  
                            />
                            <Text style={styles.navbartext}>Лекарства</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.drugsandauther}>
                        <Image 
                            source={require('./pictures/dotes.png')} 
                            style={styles.picturenavbar}
                            resizeMode='stretch'  
                            />
                            <Text style={styles.navbartext}>   Еще</Text>
                    </TouchableOpacity>
                
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

//синий блок сверху экрана
textBlock1: {
    backgroundColor: '#00305D',
    height: '15%',
    width: '100%',
    top: -65,
    justifyContent: 'space-around',
    flexDirection: 'row',
    //justifyContent: 'space-around',
    
    alignItems: 'center'

},

// navbar
textBlock2: {
    color: '#ffffff',
    fontSize: 16,
    top: 18,
    left: -80

},


text: {
    color: '#00305D',
    fontSize: 22,
    textAlign: 'center',
    // top: 100,
    fontWeight: 'bold',
    top: -70
},




picture: {
    top: 20,
    width: 130,
    height: 130
},

picture1: {
    top: 18,
    left: -40,
    width: 48,
    height: 48
},

picture2: {
    top: 18,
    width: 35,
    height: 26,
    right: -40
},

navbar1: {
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    width: '100%',
    height: '10%',
    bottom: -54,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
    
    
},

navbartext: {
    color: '#00305D',
    fontSize: 12,
    alignItems: 'center',
    left: -4
},

blok: {
    backgroundColor: '#D9E3F4',
    width: '35%',
    left: -30,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',


    
},

drugsandauther: {
    left: -34
}


});