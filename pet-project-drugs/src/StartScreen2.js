import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


// const Stack = createStackNavigator(); 

class StartScreen2 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textBlock}>
                    <Text style={styles.text}>Отлично! {"\n"}Не забывайте, {"\n"}что любые {"\n"}лекарства должны {"\n"}приниматься по{"\n"}назначению {"\n"}врача!</Text>
                </View>

                <Image source={require('./pictures/startScreen2.png')} style={styles.picture}/>

                <View>
                    <Text style={styles.text2}>{"\n"}Разрешите отправлять {"\n"}вам уведомления</Text>
                </View>

                <View style={styles.outter} activeOpacity={1}>
                    <Button 
                      title={'Разрешить'}
                      color={'#ffffff'}
                      onPress={() => 
                        this.props.navigation.navigate('PermissionsNotification')
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
    left: 35,
    width: 170,
    height: 170
  },

  text2: {
    color: '#00305D',
    fontSize: 24,
    textAlign: 'center'
  },
});

export default StartScreen2;