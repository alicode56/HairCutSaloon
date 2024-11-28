import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomBackbtmimg from '../Components/CustomBackbtmimg'
import CustonTextinput from '../Components/CustonTextinput'
import CustonButton from '../Components/CustonButton'

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <CustomBackbtmimg />

      <Image source={require('../Images/forgot.png')}
        style={{ width: 94, height: 94, top: 123, left: 140 }} />
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFFFFF', marginTop: 130, textAlign: 'center' }}>
        FORGET PASSWORD
      </Text>
      <Text style={{ fontSize: 17, color: '#FFFCFCE5', textAlign: 'center', marginHorizontal: 15 }}>
        Enter your email address associated
        with your account we will send you a
        link to reset your password
      </Text>
      <CustonTextinput
        placeholder={'Email adress'} />

<View style={{marginVertical:40}}>
      <CustonButton title={'Continue'}
        onPress={() => navigation.navigate('OtpVerification')} />
        </View>
    </View>
  )
}

export default ForgotPassword