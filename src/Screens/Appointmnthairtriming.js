import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomAppointment from '../Components/CustomAppointment'
import CustonButton from '../Components/CustonButton'

const Appointmnthairtriming = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <CustomAppointment />

            <Text style={{ color: 'white', textAlign: 'center', fontSize: 12, fontWeight: '600' }}>Lorem ipsum dolor sit amet consectetur.
                Faucibus amet sagittis pellentesque donec odio
                nec quis at ullamcorper. Pulvinar lacus ultrices s
                ed mi auctor mi porttitor. Id vel pellentesque impe
                rdiet suspendisse convallis eleife euismod.
            </Text>
            <TouchableOpacity>
                <Text style={{ color: '#FEC205', marginLeft: '70%', bottom: 18 }}>read more</Text></TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    <Image source={require('../Images/t1.png')}
                        style={styles.imgstyl} />
                    <Image source={require('../Images/t2.png')}
                        style={styles.imgstyl} />
                    <Image source={require('../Images/t3.png')}
                        style={styles.imgstyl} />
                    <Image source={require('../Images/t1.png')}
                        style={styles.imgstyl} />
                </View>
                <TouchableOpacity>
                    <Text style={{ color: '#FEC205', marginLeft: 20 }}>Meet our Team</Text>
                </TouchableOpacity>

            </View>
            <View style={{ marginVertical: 10 }}>
                <CustonButton title={'Book Appointment '} />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    imgstyl: {
        width: 24,
        height: 24,
        // position:'absolute',

    }
})
export default Appointmnthairtriming