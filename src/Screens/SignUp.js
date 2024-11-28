import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CustonButton from '../Components/CustonButton'
import CustomBackbtmimg from '../Components/CustomBackbtmimg'
import CustonTextinput from '../Components/CustonTextinput'
import CustomWithImgFb from '../Components/CustomWithImgFb'

const SignUp = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <CustomBackbtmimg />
      <ScrollView>
      <Text style={{
        fontWeight: 'bold', fontSize: 30, top: 107,
        left: 58, color: '#FFFFFF'
      }}>
        SignUp</Text>

      <View style={{ marginTop: 100 }}>
        <CustonTextinput
          placeholder={'Full name'} />

        <CustonTextinput
          placeholder={'Email adress'} />

        <CustonTextinput
          placeholder={'Password'} />

        <CustonTextinput
          placeholder={'Confirm Password'} />


        <CustonButton title={'Sign Up'} />


        <View style={{ flexDirection: 'row', top: 25, alignSelf: 'center',}}>
          <View style={{ width: 147, height: 1, backgroundColor: '#FFFFFF4D', marginTop:10 }}></View>

          <Text style={{ color: '#FFFFFF80', fontWeight: 'bold', fontSize: 16, marginBottom:10,marginHorizontal:8 }}>
            OR</Text>
          <View style={{ width: 147, height: 1,backgroundColor: '#FFFFFF4D',marginTop:10}}></View>
        </View>
        <CustomWithImgFb title={'Sign Up with Facebook'}
        icon={require('../Images/icom_fb.png')}
   
        />



<View style={{flexDirection:'row',alignSelf:'center',marginVertical:50}}>
  <Text style={{color:'#FFFFFF4D'}}>Do you have accoutn?</Text>
  <TouchableOpacity style={{
    left:6
  }} onPress={()=>navigation.navigate('SignIn')}>
  <Text style={{color:'#FFC105',}}>Sign In</Text>
  </TouchableOpacity>
 
</View>
      </View>



      </ScrollView>

    </View>
  )
}

export default SignUp