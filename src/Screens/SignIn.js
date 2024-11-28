import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomBackbtmimg from '../Components/CustomBackbtmimg'
import CustonTextinput from '../Components/CustonTextinput'
import CustonButton from '../Components/CustonButton'
import CustomWithImgFb from '../Components/CustomWithImgFb'



const SignIn = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <CustomBackbtmimg />
      <ScrollView>
        <Text style={{
          fontWeight: 'bold', fontSize: 30, top: 107,
          left: 58, color: '#FFFFFF'
        }}>
          Sign In</Text>

        <View style={{ marginTop: 100 }}>
          <CustonTextinput
            placeholder={'Email adress'} />

          <CustonTextinput
            placeholder={'Password'} />

            <TouchableOpacity style={{
              alignSelf:'flex-end',marginHorizontal:20,marginVertical:15
            }}
            onPress={()=>navigation.navigate('ForgotPassword')}>
              <Text style={{color:'#FFFFFF'}}>Forgot Password?</Text>
            </TouchableOpacity>


          <CustonButton title={'Sign In'}
          onPress={()=>navigation.navigate('Mainscreen')}
          />


          <View style={{ flexDirection: 'row', top: 25, alignSelf: 'center', }}>
            <View style={{ width: 147, height: 1, backgroundColor: '#FFFFFF4D', marginTop: 10 }}></View>

            <Text style={{ color: '#FFFFFF80', fontWeight: 'bold', fontSize: 16, marginBottom: 10, marginHorizontal: 8 }}>
              OR</Text>
            <View style={{ width: 147, height: 1, backgroundColor: '#FFFFFF4D', marginTop: 10 }}></View>
          </View>
          <CustomWithImgFb title={'Sign Up with Facebook'}
            icon={require('../Images/icom_fb.png')}
            style={{ marginTop: 50 }}
          />



          <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 60 }}>
            <Text style={{ color: '#FFFFFF4D' }}>Do you have accoutn?</Text>
            <TouchableOpacity style={{
              left: 6
            }} onPress={() => navigation.navigate('SignUp')}>
              <Text style={{ color: '#FFC105', }}>Sign Up</Text>
            </TouchableOpacity>

          </View>
        </View>



      </ScrollView>

    </View>
  )
}

export default SignIn