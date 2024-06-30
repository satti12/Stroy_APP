import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, StatusBar,TextInputBase } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Verifyscreen extends Component {
  handleVerifyPress = () => {
    this.props.navigation.navigate('Resetpassword'); // Use navigation prop to navigate
  };

  render() {
    return (
      <View style={styles.container}>
         <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <View style={styles.textcontainer}>
          <Text style={styles.textprop}>Please check your email</Text>
          <Text style={styles.textprop}>imanefh28@gmail.com to see the </Text>
          <Text style={styles.textprop}>verification code</Text>
        </View>
        <View style={styles.optcontianer}>
          <Text style={styles.heading}>OTP Code</Text>
          <View style={styles.textinputfiled}>
            <TextInput
              style={styles.box1}
              placeholder='0'
              placeholderTextColor='black'
              keyboardType='numeric'
            />
            <TextInput
              style={styles.box1}
              placeholder='0'
              placeholderTextColor='black'
              keyboardType='numeric'
            />
            <TextInput
              style={styles.box1}
              placeholder='0'
              placeholderTextColor='black'
              keyboardType='numeric'
            />
            <TextInput
              style={styles.box1}
              placeholder='0'
              placeholderTextColor='black'
              keyboardType='numeric'
            />
          </View>
          <View style={styles.buttoncontainer}>
          <LinearGradient
            colors={['#B32DE5', '#34267D']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}>
            <TouchableOpacity onPress={this.handleVerifyPress}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.mainsec}>
            
            <TouchableOpacity >
            <Text style={styles.bottomsec}>Resend code </Text> 
            </TouchableOpacity>
        
            <Text style={ styles.bottomsec}>01:26</Text> 
        </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textcontainer: {
    width: 312,
    height: 68,
    marginTop: 90,
    alignContent: 'center',
    marginLeft: 20,
  },
  textprop: {
    fontWeight: '400',
    lineHeight: 22.5,
    fontSize: 14,
    color: '#000000BF',
    textAlign: 'center',
  },
  optcontianer: {
    width: 300,
    height: 228,
    marginLeft: 31,
    marginTop: 20,
  },
  textinputfiled: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  box1: {
    textAlign: 'center',
    color: 'black',
    borderRadius: 12,
    width: 70,
    height: 56,
    backgroundColor: '#F7F7F9',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    color: '#1B1E28',
  },
  buttoncontainer: {
    marginTop: 36,
    alignItems: 'center',
  },
  button: {
    width: 273,
    borderRadius: 7,
    height: 44,
    padding: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  mainsec:{
    flexDirection:'row',
    marginTop:50,
    justifyContent:'space-between',
    marginLeft:12,
    marginRight:12,
  },
  bottomsec:{
  color:'#000000BF',
  
  }
});
