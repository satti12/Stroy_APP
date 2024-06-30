import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../Screen/StartScreen';
import Forgetpasswordscreen from '../Screen/Forgetpasswordscreen';
import Verifyscreen from '../Screen/Verifyscreen';
import Resetpassword from '../Screen/Resetpassword';
import Updatepassword from '../Screen/Updatepassword';
import Storyscreen from '../Screen/Storyscreen';
import Loginpage from '../Screen/Loginpage';
import SignupScreen from '../Screen/SignupScreen';
import TabNavigator from './TabNavigator';
import Commentscreen from '../Screen/Commentscreen';
import PlusStackNavigator from './PlusStackNavigator';

const Stack = createStackNavigator();


const Nav = () => {
  return (
    <Stack.Navigator initialRouteName="StartScreen" >
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Forgetpasswordscreen" component={Forgetpasswordscreen} options={{ title: 'Forget Password', headerStyle: { backgroundColor: '#FFFFFF' }, headerTintColor: '#000000', headerTitleStyle: { fontWeight: '600', fontSize: 24, textAlign: 'center' } }} />
      <Stack.Screen name="Verifyscreen" component={Verifyscreen} options={{ title: 'OTP verification', headerStyle: { backgroundColor: '#FFFFFF' }, headerTintColor: '#000000', headerTitleStyle: { fontWeight: '600', fontSize: 24, textAlign: 'center' } }} />
      <Stack.Screen name="Resetpassword" component={Resetpassword} options={{ title: 'Create New Password', headerStyle: { backgroundColor: '#FFFFFF' }, headerTintColor: '#000000', headerTitleStyle: { fontWeight: '600', fontSize: 24, textAlign: 'center' } }} />
      <Stack.Screen name="Updatepassword" component={Updatepassword} options={{ title: 'Create New Password', headerStyle: { backgroundColor: '#00000066' }, headerTintColor: '#000000', headerTitleStyle: { fontWeight: '600', fontSize: 24, textAlign: 'center' } }} />
      <Stack.Screen name="Loginpage" component={Loginpage} options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Storyscreen" component={Storyscreen} options={{ headerShown: false }} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} /> 
      <Stack.Screen name="PlusStackNavigator" component={PlusStackNavigator} options={{ headerShown: false }} /> 
      <Stack.Screen name="Commentscreen" component={Commentscreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Nav;
