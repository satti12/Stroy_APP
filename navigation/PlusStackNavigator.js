// PlusStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Plus from '../Screen/Plus';
import Commentscreen from '../Screen/Commentscreen'; // Add other screens you want to navigate to
import Profile from '../Screen/Profile';
import Home from '../Screen/Home';
import StartScreen from '../Screen/StartScreen';
import Storyscreen from '../Screen/Storyscreen';
const Stack = createStackNavigator();

const PlusStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Storyscreen" component={Storyscreen} />
      <Stack.Screen name="Commentscreen" component={Commentscreen} />
      
     
    </Stack.Navigator>
  );
};

export default PlusStackNavigator;
