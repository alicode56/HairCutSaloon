import { View, Text } from 'react-native'
import React from 'react'
import CustomBackbtmimg from '../Components/CustomBackbtmimg'
import CustonTextinput from '../Components/CustonTextinput'
import CustonButton from '../Components/CustonButton'

const Changepasword = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
   <CustomBackbtmimg/>
   <View style={{marginVertical:40}}>
    <CustonTextinput
    placeholder={'Old Password'}/>

<CustonTextinput
    placeholder={'New Password'}/>

<CustonTextinput
    placeholder={'Confirm Password'}/>
   </View>

   <View style={{marginTop:'60%'}}>
<CustonButton title={'Continue'}
onPress={()=>navigation.navigate('Invitationcodelink')}/>
   </View>
    </View>
  )
}

export default Changepasword