import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'

const CustonButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={{
        width:280,
        height:55,
        // top:750,
        left:50,
        justifyContent:'center',
        borderRadius:93,
        borderWidth:1,
        backgroundColor:'#FF9C00',
        marginVertical:8,
    }} onPress={onPress}>
        <Text style={{color:'white',textAlign:'center'}}>{title}</Text>
     
    </TouchableOpacity>
  )
}

export default CustonButton