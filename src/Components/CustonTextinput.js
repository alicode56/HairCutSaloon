import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustonTextinput = ({ value, text, placeholder, keyboardType, onChangeText, setText }) => {
  //  const []
  return (
    <View style={{
      width: 280,
      height: 55,
      // top:750,
      left: 50,
      // alignSelf:'center',
      justifyContent: 'center',
      borderRadius: 93,
      borderWidth: .3,

      borderColor: '#FFFFFF80',
      marginTop: 15,



    }}>
      <TextInput
        value={value}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onChangeText={(text) => {
          setText(text);
        }}
        placeholder={placeholder}
        placeholderTextColor={'#FFFFFF4D'}
        style={{ marginLeft: 10 }} />



    </View>
  )
}

export default CustonTextinput














// import { View, Text, TextInput } from 'react-native'
// import React from 'react'

// const CustonTextinput = ({ value, text, placeholder, keyboardType, onChangeText,setText }) => {
//   return (
//     <View style={{
//       width: 280,
//       height: 55,
//       // top:750,
//       left: 50,
//       // alignSelf:'center',
//       justifyContent: 'center',
//       borderRadius: 93,
//       borderWidth: .3,

//       borderColor: '#FFFFFF80',
//       marginTop: 15,



//     }}>
//       <TextInput
//         value={value}
//         keyboardType={keyboardType ? keyboardType : 'default'}
//         onChangeText={(text) => {
//           setText(text);
//         }}
//         placeholder={placeholder}
//         placeholderTextColor={'#FFFFFF4D'}
//         style={{ marginLeft: 10 }} />



//     </View>
//   )
// }

// export default CustonTextinput