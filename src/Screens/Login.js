import { View, Text, ImageBackground, Image, ScrollView, onPress, TouchableOpacity } from 'react-native'
import React from 'react'
import CustonButton from '../Components/CustonButton'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ width: 422, height: 543, backgroundColor: 'blue' }}>
          <ImageBackground style={{ width: 422, height: 543 }}
            source={require('../Images/backgroud.png')}>
            <Image source={require('../Images/logo.png')}
              style={{ width: 200, height: 137, top: 280, alignSelf: 'center' }} />
            <Text style={{ fontSize: 20, fontWeight: '800', color: 'white', top: 290, textAlign: 'center' }}>Become the best
              version {'\n'} of yourself</Text>
          </ImageBackground>
        </View>

        <View style={{ width: 422, height: 206, backgroundColor: '#000000E5' }}>
          <CustonButton title={'Sign In'}
          onPress={()=>navigation.navigate('SignIn')}
          />
          <CustonButton title={'Sign Up'}
                onPress={() => navigation.navigate('SignUp')}/>

        </View>

      </ScrollView>


    </View>
  )
}

export default Login

