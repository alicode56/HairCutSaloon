import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';

import Home from '../BottomNavigation/Home';
import Schedule from '../BottomNavigation/Schedule';
import Profile from '../BottomNavigation/Profile';
import Seeting from '../BottomNavigation/Seeting';

const Tab = createBottomTabNavigator();

const Mainscreen = () => {
  return (

    <View style={{flex:1,}}>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size,focused }) => (
            <Image
              source={require('../Images/Home.png')}
              style={{ width:28, height:28,tintColor:focused?'#FFC306':'black' }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({ color, size,focused }) => (
            <Image
              source={require('../Images/Schedule.png')}
              style={{width:28, height:28,tintColor: focused?'#FFC306':'black' }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require('../Images/Customer.png')}
              style={{   tintColor: focused ? '#FFC306' : 'black',width:28, height:28,}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Seeting"
        component={Seeting}
        options={{
          tabBarIcon: ({ color, size ,focused}) => (
            <Image
              source={require('../Images/Gear.png')}
              style={{tintColor:focused?"#FFC306":'black',width:28, height:28,}}
            />
          ),
        }}
      />




      

    </Tab.Navigator>
    </View>
  );
};

export default Mainscreen;




































// import { View, Text, TextInput, Image } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Home from '../BottomNavigation/Home';
// import Schedule from '../BottomNavigation/Schedule';
// import Profile from '../BottomNavigation/Profile';
// import Seeting from '../BottomNavigation/Seeting';




// const Tab = createBottomTabNavigator();

// const Mainscreen = () => {
//   return (
   
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//       />

//       <Tab.Screen
//         name="Schedule"
//         component={Schedule}
//       />

//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//       />

//       <Tab.Screen
//         name="Seeting"
//         component={Seeting}
//       />


//     </Tab.Navigator>
  
//   )
// }


// export default Mainscreen

