import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CustomBackbtmimg from '../Components/CustomBackbtmimg';

const ScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const placeOrder = () => {
    // Here you can implement the logic to place the order
    console.log('Order placed:', {
      selectedDate,
      selectedTime,
      contactDetails,
      phoneNumber,
      address
    });
    // Clearing fields after placing the order
    setSelectedDate('');
    setSelectedTime('');
    setContactDetails('');
    setPhoneNumber('');
    setAddress('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <CustomBackbtmimg />
      <ScrollView>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image
            source={require('../Images/Schedule.png')}
            style={{ width: 70, height: 70, tintColor: '#FFC306' }}
          />
        </View>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{ [selectedDate]: { selected: true, marked: true, selectedColor: 'red' } }}
          style={styles.calendar}
        />

        <Text style={styles.infoText}>Select Time:</Text>
        <TextInput
          style={styles.input}
          placeholder="Selected Time"
          value={selectedTime}
          onChangeText={setSelectedTime}
        />

        <Text style={styles.infoText}>Contact Details:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contact Details"
          value={contactDetails}
          onChangeText={setContactDetails}
        />

        <Text style={styles.infoText}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <Text style={styles.infoText}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />

        <TouchableOpacity style={styles.button} onPress={placeOrder}>
          <Text style={styles.buttonText}>Place your order</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginVertical: 16,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    // color: 'white'
  },
  input: {
    height: 35,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,

  },
  button: {
    width: '80%',
    backgroundColor: '#FFC306',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    // color:'red'
  }
});

export default ScheduleScreen;









// import React, { useState } from 'react';
// import { ScrollView, View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import CustomBackbtmimg from '../Components/CustomBackbtmimg';


// const ScheduleScreen = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [contactDetails, setContactDetails] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');

//   const onDayPress = (day) => {
//     // Handle day press event
//     setSelectedDate(day.dateString);
//   };

//   return (

//     <View style={{ flex: 1, backgroundColor: 'black' }}>
//       <CustomBackbtmimg />

//       <ScrollView>

//         {/* <ScrollView style={styles.container}>
//       <View style={{backgroundColor:'black'}}>
//        <Image
//         source={require('path_to_your_image')}
//         style={styles.upperImage}
//         resizeMode="cover"
//       /> */}
//         <View style={{ alignItems: 'center', }}>
//           <Image
//             source={require('../Images/Schedule.png')}
//             style={{ width: 70, height: 70, tintColor: '#FFC306' }} />
//         </View>
//         {/* <Text style={styles.title}>Schedule</Text> */}
//         <View style={{}}>
//           <Calendar
//             onDayPress={onDayPress}
//             markedDates={{ [selectedDate]: { selected: true, marked: true, selectedColor: 'red' } }}
//             style={styles.calendar}
//           />
//         </View>

//         {/* Time Selection */}
//         <Text style={styles.infoText}>Select Time:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Selected Time"
//           value={selectedTime}
//           onChangeText={setSelectedTime}
//         />

//         {/* Contact Details */}
//         <Text style={styles.infoText}>Contact Details:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Contact Details"
//           value={contactDetails}
//           onChangeText={setContactDetails}
//         />

//         {/* Phone Number */}
//         <Text style={styles.infoText}>Phone Number:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Phone Number"
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//           keyboardType="phone-pad"
//         />

//         {/* Address */}
//         <Text style={styles.infoText}>Address:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Address"
//           value={address}
//           onChangeText={setAddress}
//         />

//         <TouchableOpacity style={{ width: '100%', backgroundColor: '#FFC306', marginVertical: 5 }}>
//           <Text style={{ fontSize: 16, textAlign: 'center' }}>Place your order</Text>
//         </TouchableOpacity>

//       </ScrollView>
//     </View>
//   );
// };



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   upperImage: {
//     width: '100%',
//     height: 150,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 14,
//     textAlign: 'center',
//     color: 'white',
//     marginVertical: 5
//   },
//   calendar: {
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 10,
//     marginVertical: 16,

//   },
//   infoText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 5,
//     color: 'white'
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//     marginBottom: 5,
//     color: 'white'
//   },
// });

// export default ScheduleScreen;







// import React, { useState } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { Calendar } from 'react-native-calendars';

// const Schedule = () => {
//   const [selectedDate, setSelectedDate] = useState('');

//   const onDayPress = (day) => {
//     // Handle day press event
//     setSelectedDate(day.dateString);
//   };

//   return (
//     <View style={styles.container}>
//       <Calendar
//         onDayPress={onDayPress}
//         markedDates={{ [selectedDate]: { selected: true, marked: true, selectedColor: '#FFC306' } }}
//       />
//       {selectedDate ? (
//         <View style={styles.selectedDateContainer}>
//           <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
//         </View>
//       ) : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   selectedDateContainer: {
//     marginTop: 16,
//   },
//   selectedDateText: {
//     fontSize: 18,
//     color: 'blue',
//   },
// });

// export default Schedule;
