import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Top_Navigation from '../Navigation/Top_Navigation'
import CustomMainHeader from '../Components/CustomMainHeader'

const Home = () => {
  return (

    <View style={{ backgroundColor: 'black', flex: 1 }}>


      <View
        style={{
          flex: 1,
          //  backgroundColor: 'black'
        }}>
        <CustomMainHeader />

        <View style={styles.Viewsize}>
          <View style={{
            width: '80%', height: 35, borderWidth: .5, borderColor: 'white', borderRadius: 10,
            justifyContent: 'center', marginHorizontal: 10
          }}>
            <Image source={require('../Images/Search.png')}
              style={{ width: 24, height: 24, left: 10, tintColor: 'white' }} />
          </View>

          <View>
            <Image source={require('../Images/mainthreline.png')}
              style={{ width: 47, height: 47 }} />

          </View>
        </View>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, color: '#FEBE05', marginLeft: '75%', bottom: 10 }}>See More</Text>
        </TouchableOpacity>


        <Top_Navigation />
      </View>

    </View>
  )
};
const styles = StyleSheet.create({
  container: {

  },
  Viewsize: {
    width: '95%',
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center'
  }

})

export default Home