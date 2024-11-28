import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', }}>
      <View style={{ flexDirection: 'row', top: 5, }}>

        <Image source={require('../Images/mainprofile.png')}
          style={{ width: 65, height: 65, left: 10 }} />

        <View style={{ flexDirection: 'column', marginHorizontal: 30 }}>
          <Text style={{ color: '#FFFF', fontSize: 20 }}>Hexarider</Text>
          <Text style={{ color: '#FEBB04', fontSize: 16 }}>Membership ID: AA8490-2</Text>
        </View>

      </View>
      <View style={{ top: 20, }}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../Images/apointmrntcylnder.png')}
              style={styles.Picture} />
            <Text style={styles.Textmain}>Go to Appointments</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../Images/refrltrophy.png')}
              style={styles.Picture} />
            <Text style={styles.Textmain}>My Referrals</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../Images/Gear.png')}
              style={styles.Picture} />
            <Text style={styles.Textmain}>Settings</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../Images/Play.png')}
              style={styles.Picture} />
            <Text style={styles.Textmain}>Play Intro</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../Images/notification.png')}
              style={styles.Picture} />
            <Text style={styles.Textmain}>Notifications</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../Images/Logout.png')}
              style={styles.Picture} />
            <Text style={styles.Textmain}>Logout</Text>
          </View>

        </View>
        <View style={{ marginTop: '60%' }}>
          <Image source={require('../Images/bottomboerderline1.png')}
            style={{ width: '100%', height: 15 }} />
          <Image source={require('../Images/bottomborderline2.png')}
            style={{ width: '100%', height: 15, marginTop: 10 }} />
        </View>
      </View>



    </View>
  )
};



const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  Textmain: {
    fontSize: 16,
    color: '#FFFF',
    fontWeight: 'bold',
    marginVertical: 6,
    left: 28
  },
  Picture: {
    width: 28,
    height: 30,
    left: 16
  }

})

export default Profile