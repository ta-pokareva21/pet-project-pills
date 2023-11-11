import React, { useEffect } from "react"
import { StyleSheet, View, Button, Image } from "react-native"
import * as Notifications from "expo-notifications"
import * as Permissions from "expo-permissions"
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// Show notifications when the app is in the foreground
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    }
  },
})

export default function PermissionsNotification() {
  useEffect(() => {
    // Permission for iOS
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then(statusObj => {
        // Check if we already have permission
        if (statusObj.status !== "granted") {
          // If permission is not there, ask for the same
          return Permissions.askAsync(Permissions.NOTIFICATIONS)
        }
        return statusObj
      })
      .then(statusObj => {
        // If permission is still not given throw error
        if (statusObj.status !== "granted") {
          throw new Error("Permission not granted")
        }
      })
      .catch(err => {
        return null
      })
  }, [])

  const triggerLocalNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Привет",
        body: "Так ты будешь получать свои напоминания!",
      },
      trigger: { seconds: 5 },
    })
  }


  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image source={require('./pictures/mailScreen3.png')} style={styles.pictureMail}/>
        <Button
            title="Нажмите сюда, чтобы получить свое первое уведомление"
            color='#00305D'
            onPress={triggerLocalNotificationHandler}
        />
        <View style={styles.outter} activeOpacity={1}>
          <Button 
            title={'Далее'}
            color={'#ffffff'}
            onPress={() => 
              navigation.navigate('SignIn')
            }
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  pictureMail: {
    marginBottom: 20,
    width: 100,
    height: 100,
    left: 10
  },

  outter: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    width: '50%',
    height: '6%', 
    backgroundColor: '#00305D',
    borderRadius: 24,
    top: 220,
    marginBottom: '15%'
  },

})


