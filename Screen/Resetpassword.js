import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity,StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export class Resetpassword extends Component {
  state = {
    newPassword: '',
    confirmPass: '',
    hideNewPassword: true,
    hideConfirmPass: true,
  };

  handleVerifyPress = () => {
    // Navigate to the next screen
    this.props.navigation.navigate('Updatepassword');
  };

  toggleNewPasswordVisibility = () => {
    this.setState((prevState) => ({
      hideNewPassword: !prevState.hideNewPassword,
    }));
  };

  toggleConfirmPassVisibility = () => {
    this.setState((prevState) => ({
      hideConfirmPass: !prevState.hideConfirmPass,
    }));
  };

  render() {
    const { newPassword, confirmPass, hideNewPassword, hideConfirmPass } = this.state;

    const newPassIcon = hideNewPassword ? require('../assets/icon.png') : require('../assets/iconshhow.png');
    const confirmPassIcon = hideConfirmPass ? require('../assets/icon.png') : require('../assets/iconshhow.png');

    return (
      <View style={styles.container}>
         <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/back.png')}
            style={styles.image}
            accessibilityLabel="Forget Password Image"
          />
        </View>
        <View style={styles.newcontainer}>
          <Text style={styles.text}>Create your new Password</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              placeholder='Password'
              placeholderTextColor='#00000080'
              secureTextEntry={hideNewPassword}
              value={newPassword}
              onChangeText={(text) => this.setState({ newPassword: text })}
            />
            <TouchableOpacity onPress={this.toggleNewPasswordVisibility}>
              <Image
                source={newPassIcon}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              placeholder='Confirm Password'
              placeholderTextColor='#00000080'
              secureTextEntry={hideConfirmPass}
              value={confirmPass}
              onChangeText={(text) => this.setState({ confirmPass: text })}
            />
            <TouchableOpacity onPress={this.toggleConfirmPassVisibility}>
              <Image
                source={confirmPassIcon}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttoncontainer}>
          <LinearGradient
            colors={['#B32DE5', '#34267D']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}>
            <TouchableOpacity onPress={this.handleVerifyPress} style={styles.nn}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </LinearGradient>
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
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    height: 300,
    width: 300,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  },
  newcontainer: {
    marginLeft: 39,
    marginRight: 20,
  },
  inputWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#B32DE5',
    borderRadius: 10,
    paddingHorizontal: 18,
  },
  input: {
    fontSize:12,
    color: 'black',
    flex: 1,
  },
  icon: {
    height: 22,
    width: 22,
  },
  buttoncontainer: {
    marginTop: 90,
    marginLeft:10,
    alignItems: 'center',
  },
  button: {
   
    borderRadius: 7,
  },
  nn:{
    alignItems: 'center',
    height: 44,
    padding: 8,
    width: 273,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});

export default Resetpassword;
