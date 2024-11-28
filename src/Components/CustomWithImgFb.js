import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const CustomWithImgFb = ({ title,icon}) => {
    return (
        <TouchableOpacity style={{
            width: 280,
            height: 55,
            // top:750,
            left: 50,
            justifyContent: 'center',
            borderRadius: 93,
            borderWidth: 1,
           borderWidth:.6,
          borderColor:'#FFFFFF',
            top: 30,
            alignItems:'center',flexDirection:'row'
        }}>
            <Image source={icon} style={{width:30,height:30,}}/>
            <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>{title}</Text>

        </TouchableOpacity>
    )
}

export default CustomWithImgFb