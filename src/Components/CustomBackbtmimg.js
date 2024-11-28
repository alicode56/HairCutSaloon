import { View, Text,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const CustomBackbtmimg = () => {
    const navigation=useNavigation();

  return (
    <View>
       <TouchableOpacity 
       onPress={()=>navigation.goBack()}>
      <Image source={require('../Images/backbtn.png')}
      style={{width:43,height:43,top:20,left:27}}/>
      </TouchableOpacity>
    </View>
  )
}

export default CustomBackbtmimg