import { View, Text } from 'react-native'
import React from 'react'
import CustomBackbtmimg from '../Components/CustomBackbtmimg'
import CustonTextinput from '../Components/CustonTextinput'
import CustonButton from '../Components/CustonButton'


const SetNewpassword = ({ navigation }) => {

  return (
    <View style={{flex:1,backgroundColor:'black'}}>
    <CustomBackbtmimg/>
    <View style={{marginVertical:90,top:40}}>
    <CustonTextinput placeholder={'Passworod'}/>
     <CustonTextinput placeholder={'New Passworod'}/>
    </View>
    <View style={{marginTop:50}}>
      <CustonButton title={'Continue'}
      onPress={()=>navigation.navigate('Mainscreen')}/>
      </View>

    </View>
  )
}

export default SetNewpassword
