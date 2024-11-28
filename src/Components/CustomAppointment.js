import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomBackbtmimg from './CustomBackbtmimg';
import CustonButton from './CustonButton';

const CustomAppointment = ({ lable, backgimg }) => {
    return (
        <View style={{ backgroundColor: 'black' }}>
            <ImageBackground
                source={require('../Images/apoitmnthaircut.png')}
                style={styles.imgstyle}>
                <CustomBackbtmimg />
            </ImageBackground>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.secndView}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Fade Cut</Text>

                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <Image source={require('../Images/location.png')}
                            style={{ width: 20, height: 20, tintColor: '#FFFFFF99', bottom: 2 }} />
                        <Text style={{ fontSize: 16, color: '#FFFFFF99', left: 8 }}>Shai Road RYK </Text>
                    </View>
                </View>

                <View style={{
                    width: '50%',

                    //  backgroundColor: 'red'
                }}>
                    <TouchableOpacity>
                        <Image source={require('../Images/Heart.png')}
                            style={{ width: 24, height: 25, marginLeft: 140, marginVertical: 10 }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: 85, height: 35, borderWidth: .5, borderColor: '#FEC205',
                        alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 85
                    }}>
                        <Text style={{ color: '#FEC205', }}>$ 150.0</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 35, marginVertical: 10 }}>
                <Text style={{ color: '#FFFFFF99', }}>4.5</Text>
                <Image source={require('../Images/stars.png')}
                    style={{ width: 105, height: 16, marginLeft: 10 }} />
            </View>

            <View style={{
                width: '90%', height: 1, backgroundColor: '#FFFF', alignSelf: 'center',
                marginVertical: 20
            }}>


            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    imgstyle: {
        width: 427,
        height: 420,
        alignSelf: 'center'
    },
    secndView: {
        width: '50%',
        //  backgroundColor: 'yellow',
        flexDirection: 'column', alignItems: 'center'
    }


})

export default CustomAppointment