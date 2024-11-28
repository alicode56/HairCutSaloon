import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'
import SignIn from '../Screens/SignIn'
import ForgotPassword from '../Screens/ForgotPassword'
import OtpVerification from '../Screens/OtpVerification'
import SetNewpassword from '../Screens/SetNewpassword'
import Mainscreen from '../Screens/Mainscreen'
import Changepasword from '../Common/Changepasword'
import Invitationcodelink from '../Common/Invitationcodelink'
import NotificationLstscrn from '../Common/NotificationLstscrn'
import AppointmentHaircut from '../Screens/AppointmentHaircut'
import Appointmenthairdryer from '../Screens/Appointmenthairdryer'
import Appointmenthaircolor from '../Screens/Appointmenthaircolor'
import Appointmnthairtriming from '../Screens/Appointmnthairtriming'









const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>

        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='OtpVerification' component={OtpVerification} />
        <Stack.Screen name='SetNewpassword' component={SetNewpassword} />
        <Stack.Screen name='Mainscreen' component={Mainscreen} />
        <Stack.Screen name='Changepasword' component={Changepasword} />
        <Stack.Screen name='Invitationcodelink' component={Invitationcodelink} />
        <Stack.Screen name='NotificationLstscrn' component={NotificationLstscrn}/>
        <Stack.Screen name='AppointmentHaircut' component={AppointmentHaircut}/>
        <Stack.Screen name='Appointmenthairdryer' component={ Appointmenthairdryer}/>
        <Stack.Screen name='Appointmenthaircolor' component={Appointmenthaircolor}/>
        <Stack.Screen name='Appointmnthairtriming' component={Appointmnthairtriming}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator