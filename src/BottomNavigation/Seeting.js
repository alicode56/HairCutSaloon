

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const Seeting = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
        Settings</Text>
      <View style={styles.styleView}>
        <Text style={styles.innetText}>Push Notification</Text>

        <Text style={{ color: 'red', fontSize: 10 }}>HERE TOGGLE BUTTON PUT</Text>
      </View>
      <Text style={{ fontSize: 16, color: '#FFFF', alignSelf: 'center' }}>
        Turn on Notifications and get latest updates.</Text>

      <TouchableOpacity style={styles.styleView}
        onPress={() => navigation.navigate('Changepasword')}>
        <Text style={styles.innetText}>Change Password</Text>
      </TouchableOpacity>


      <View style={{ marginTop: '80%' }}>
        <Image source={require('../Images/bottomboerderline1.png')}
          style={{ width: '100%', height: 15 }} />
        <Image source={require('../Images/bottomborderline2.png')}
          style={{ width: '100%', height: 15, marginTop: 10 }} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  styleView: {
    width: '80%',
    flexDirection: 'row',
    backgroundColor: '#2D2C2C',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
    alignItems: 'center'

  },
  innetText: {
    fontSize: 17,
    color: '#FFFF',
    left: 5

  }
})

export default Seeting