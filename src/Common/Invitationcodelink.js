import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomBackbtmimg from '../Components/CustomBackbtmimg'
import CustonTextinput from '../Components/CustonTextinput';

const Invitationcodelink = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <CustomBackbtmimg />
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>
                We’re so  delighted {'\n'}        you’re have!</Text>

            <View style={{ alignSelf: 'center', marginVertical: 12 }}>
                <Image source={require('../Images/Qrcodetype.png')}
                    style={{ width: 140, height: 140 }} />
            </View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
                Collect Your Gift {'\n'}on Entering invite Code.</Text>

            <Text style={{ fontSize: 16, color: 'white', textAlign: 'center', marginTop: 40 }}>
                Enter Invite Code
            </Text>
            <CustonTextinput />

            <TouchableOpacity style={{
                width: 144, height: 50, backgroundColor: '#FFC306', alignSelf: 'center',
                justifyContent: 'center', borderRadius: 10, marginVertical: 25
            }}
                onPress={() => navigation.navigate('NotificationLstscrn')}>
                <Text style={{ fontSize: 12, color: 'white', textAlign: 'center' }}>
                    REDEEM NOW!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignSelf: 'center' }}
                onPress={() => navigation.navigate('NotificationLstscrn')}>
                <Text style={{ color: '#FFFF' }}>Skip</Text>
            </TouchableOpacity>
        </View>
    )
};
export default Invitationcodelink