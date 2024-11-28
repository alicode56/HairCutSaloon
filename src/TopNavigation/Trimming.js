import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Trimming = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.styleView}>
        <Text style={{ color: 'white', fontSize: 20, left: 5 }}>Popular Services</Text>
        <TouchableOpacity>
          <Text style={{ color: '#FEBE05', fontSize: 18, right: 5 }}>See More</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        justifyContent: 'center', justifyContent: 'space-between',
        marginHorizontal: 5, top: 10,
        flexDirection: 'row',
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Appointmnthairtriming')}>
          <Image source={require('../Images/hairtrimng1.png')}
            style={styles.imgstyle} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Appointmnthairtriming')}>
          <Image source={require('../Images/hairtrimng2.png')}
            style={styles.imgstyle} />
        </TouchableOpacity>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  styleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'black',
    marginVertical: 15
  },
  imgstyle: {
    width: 195,
    height: 313,
    borderRadius: 15,
    bottom: 10,
    margin: 3,
    marginTop: 10
  }
})


export default Trimming