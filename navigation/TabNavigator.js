import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Home from '../Screen/Home';
import Profile from '../Screen/Profile';
import PlusStackNavigator from './PlusStackNavigator'; // Import the Plus stack navigator

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View style={{
        height: 75,
        width: 75,
        borderRadius: 15,
      }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 50,
          elevation: 0,
          borderTopLeftRadius: 50,
          ...styles.shadow,
        },
        tabBarActiveTintColor: '#B32DE5', 
      }}
    >
      <Tab.Screen
        name="Home"
        component={PlusStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../assets/Homeicon.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={PlusStackNavigator} // Use PlusStackNavigator here
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../assets/pluss.png')}
              resizeMode="cover"
              style={{ width: 52, height: 52 }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../assets/profileicon.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#0000001A',
    shadowOffset: {
      width: 20,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.25,
    elevation: 5,
  }
});

export default TabNavigator;
