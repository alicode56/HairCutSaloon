// import { View, Text } from 'react-native'
// import React,{ useState, useRef, useEffect }  from 'react'
// import CustonButton from '../Components/CustonButton'

// const OtpVerification = ({navigation})=>{
//     const [timer, setTimer]=useState(60)

//     useEffect(()=>{
//         let interval;
//         if (timer > 0){
//             interval=setInterval(()=>{
//                 setTimer((prevTimer)=>prevTimer-1);
//             },1000)
//         }
//         return()=>clearInterval(interval);
//     }, [timer])
//     return(
//           <View style={{ flex: 1, backgroundColor: "#000000" }}>

//             <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFFFFF', marginTop: 130, textAlign: 'center' }}>
//                 OTP Verification
//             </Text>
//             <Text style={{ fontSize: 17, color: '#FFFCFCE5', textAlign: 'center', marginHorizontal: 15 }}>
//                 Enter the code from the sms we sent
//                 to +91 000 111 222
//             </Text>

//             <Text style={{fontSize:30,color:'red'}}>02:33</Text>


//             <View style={{marginVertical:60}}>
//             <CustonButton title={'Continue'}
//                 onPress={() => navigation.navigate('SetNewpassword')} />
//                 </View>
//         </View>
//     )
// }    



// export default OtpVerification





import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import CustonButton from '../Components/CustonButton';


const OtpVerification = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(60);

    const inputRefs = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
    ]);

    useEffect(() => {
        let interval;

        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [timer]);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Check if all digits are entered
        if (!newOtp.includes('')) {
            // Focus on the next input field
            const nextIndex = index + 1;
            if (nextIndex < 4) {
                inputRefs.current[nextIndex].focus();
            }
        }
    };

    const generateOTP = () => {
        // Logic to generate OTP goes here
        const newOtp = Array.from({ length: 4 }, () => Math.floor(0 + Math.random() * 9));
        setOtp(newOtp.map((digit) => digit.toString()));
        setTimer(60); // Reset timer to 60 seconds

        // Focus on the first input field after generating OTP
        inputRefs.current[0].focus();
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFFFFF', marginTop: 130, textAlign: 'center' }}>
                OTP Verification
            </Text>
            <Text style={{ fontSize: 17, color: '#FFFCFCE5', textAlign: 'center', marginHorizontal: 15 }}>
                Enter the code from the sms we sent
                to +91 000 111 222
            </Text>
            <View style={{ flexDirection: 'row' }}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={{
                            height: 40,
                            width: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            textAlign: 'center',
                            marginHorizontal: 5,
                            borderRadius: 20
                        }}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleOtpChange(index, text)}
                        ref={(input) => (inputRefs.current[index] = input)}
                    />
                ))}
            </View>
            <Text style={{ marginTop: 10 }}>
                {timer > 0 ? `Time remaining: ${timer}s` : 'Click below to resend OTP'}
            </Text>
            <Button title="Generate OTP" onPress={generateOTP} />

            <View style={{ marginVertical: 90, marginRight: 70 }}>
                <CustonButton title={'Continue'}
                    onPress={() => navigation.navigate('SetNewpassword')} />
            </View>

        </View>
    );
};

export default OtpVerification







