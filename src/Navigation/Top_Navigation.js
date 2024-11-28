import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Haircut from '../TopNavigation/Haircut';
import Trimming from '../TopNavigation/Trimming';
import Haircolour from '../TopNavigation/Haircolour';
import Hairdrayer from '../TopNavigation/Hairdrayer';

const Tab = createMaterialTopTabNavigator();

const CustomTabBarButton = ({label, onPress, focused}) => (
  <TouchableOpacity
    style={[styles.tabBarButton, focused ? styles.tabBarButtonActive : null]}
    onPress={onPress}>
    <Text style={styles.tabBarButtonText}>{label}</Text>
  </TouchableOpacity>
);

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        return (
          <CustomTabBarButton
            key={index}
            label={label}
            onPress={() => navigation.navigate(route.name)}
            focused={isFocused}
          />
        );
      })}
    </View>
  );
};

const Top_Navigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      tabBarOptions={{
        labelStyle: {fontSize: 16, fontWeight: 'bold'},
        tabStyle: {width: 120},
        style: {backgroundColor: '#3498db', marginHorizontal: 20},
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Haircut"
        component={Haircut}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('../Images/logo.png')}
                style={{width: 20, height: 20}}
              />
            );
          },
        }}
      />

      <Tab.Screen name="Haircolour" component={Haircolour} />
      <Tab.Screen name="Hairdrayer" component={Hairdrayer} />
      <Tab.Screen name="Trimming" component={Trimming} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.4,
    borderRadius: 100,
    overflow: 'hidden',
    borderColor: 'white',
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabBarButtonActive: {
    borderBottomColor: 'white',
  },
  tabBarButtonText: {
    color: 'white',
    fontSize: 16,
    // fontWeight: 'bold',
  },
});

export default Top_Navigation;

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Haircut from '../TopNavigation/Haircut';
// import Trimming from '../TopNavigation/Trimming';

// import Haircolour from '../TopNavigation/Haircolour';
// import Hairdrayer from '../TopNavigation/Hairdrayer';

// const Tab = createMaterialTopTabNavigator();

// const Top_Navigation = () => {
//     return (

//         <Tab.Navigator>
//             <Tab.Screen
//                 name="Haircut"
//                 component={Haircut}
//             />
//             <Tab.Screen
//                 name="Haircolour"
//                 component={Haircolour}

//             />

//             <Tab.Screen
//                 name="Hairdrayer"
//                 component={Hairdrayer}

//             />

//             <Tab.Screen
//                 name="
//         Trimming"
//                 component={
//                     Trimming}

//             />

//         </Tab.Navigator>

//     )
// }

// export default Top_Navigation

// const styles = StyleSheet.create({})
