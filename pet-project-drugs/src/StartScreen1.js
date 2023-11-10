import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// const Stack = createStackNavigator(); 

class StartScreen1 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textBlock}>
                    <Text style={styles.text}>Привет! {"\n"}Это приложение {"\n"}поможет вам {"\n"}вовремя {"\n"}принимать {"\n"}лекарства и {"\n"}заботиться о {"\n"}здоровье!</Text>
                </View>

                <Image source={require('./pictures/startScreen.png')} style={styles.picture}/>
                
                <View style={styles.outter} activeOpacity={1}>
                    <Button 
                        title={'Начать'} 
                        color={'#ffffff'}
                        onPress={() => 
                            this.props.navigation.navigate('StartScreen2')
                        }
                        />
                </View>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0D8FC',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  textBlock: {
    width: '70%',
    marginTop: '15%'
  },

  text: {
    color: '#ffffff',
    fontSize: 32,
    
  },

  outter: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    width: '50%',
    height: '6%', 
    backgroundColor: '#00305D',
    borderRadius: 24,
    marginTop: '10%',
    marginBottom: '15%'
  },

  picture: {
    left: 20
  }
});

export default StartScreen1;