import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomBackbtmimg from '../Components/CustomBackbtmimg';
import SwitchCustomcomponent from '../Components/SwitchCustomcomponent';


const NotificationLstscrn = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <CustomBackbtmimg />
            <Text style={styles.HeadText}>Notification</Text>
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                Fresher only sends natifications about appointments you have booked
            </Text>
            <View style={styles.Mainview}>
                <View style={{ flexDirection: 'column', width: '80%', left: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Text message appointment notifications</Text>
                    <Text style={{ color: 'white' }}>Receive texts based on your sender’s
                        settings</Text>
                </View>
                <View style={{ width: '20%', }}>
                    <SwitchCustomcomponent/>
                    {/* <Image source={require('../Images/toggle.png')}
                        style={{ width: 54, height: 30, marginLeft: 10, top: 5 }} /> */}
                </View>
            </View>



            <View style={styles.Mainview}>
                <View style={{ flexDirection: 'column', width: '80%', left: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Email marketing notifactions</Text>
                    <Text style={{ color: 'white' }}>Receive offers and news via email</Text>
                </View>
                <View style={{ width: '20%', alignSelf: 'center' }}>
                <SwitchCustomcomponent/>
                    {/* <Image source={require('../Images/toggle.png')}
                        style={{ width: 54, height: 30, marginLeft: 10, top: 5 }} /> */}
                </View>
            </View>



            <View style={styles.Mainview}>
                <View style={{ flexDirection: 'column', width: '80%', left: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Email marketing notifactions</Text>
                    <Text style={{ color: 'white' }}>if you opted out privously by texting
                        STOP’</Text>
                </View>
                <View style={{ width: '20%', alignSelf: 'center' }}>
                <SwitchCustomcomponent/>
                    {/* <Image source={require('../Images/toggle.png')}
                        style={{ width: 54, height: 30, marginLeft: 10, top: 5 }} /> */}
                </View>
            </View>


            <View style={{ marginTop: '60%' }}>
                <Image source={require('../Images/bottomboerderline1.png')}
                    style={{ width: '100%', height: 15 }} />
                <Image source={require('../Images/bottomborderline2.png')}
                    style={{ width: '100%', height: 15, marginTop: 10 }} />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {

    },
    Mainview: {
        flexDirection: 'row',
        width: 340,
        height: 60,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#2D2C2C',
        marginVertical: 10,
    },
    HeadText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 20,
    },
})

export default NotificationLstscrn





// import { View, Text, } from 'react-native'
// // import React, { useState } from 'react'
// import SwitchCustomcomponent from '../Components/SwitchCustomcomponent'



// const NotificationLstscrn = () => {
//     return (
//         <View style={{alignSelf:'center'}}>
//             <SwitchCustomcomponent/>
                   
//         </View>
//     )
// }

// export default NotificationLstscrn







