import { View, Text, Image } from 'react-native'
import React from 'react'

const CustomMainHeader = () => {
  return (
    <View style={{widh:"100%",height:59,backgroundColor:'black',flexDirection:'row',
    justifyContent:'space-between',alignItems:'center',marginTop:10,marginHorizontal:10
    }}>
        <Image source={require('../Images/mainprofile.png')}
        style={{width:59,height:59}}/> 
   
   <Image source={require('../Images/logo.png')}
        style={{width:59,height:45}}/> 

         <Image source={require('../Images/bell_icon.png')}
        style={{width:24,height:27,}}/> 
    </View>
  )
}

export default CustomMainHeader