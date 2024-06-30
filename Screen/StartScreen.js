import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
const navigation=useNavigation();
const handleCreateAccountPress = () => {
   
    navigation.navigate('Loginpage');
  };
  return (
    <>
      <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/background.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.textcontainer}>
          <View style={styles.heading}>
            <Text style={styles.heading1}>Let’s hear a <Text style={styles.storyText}>story</Text> from you</Text>
            <Text style={styles.text}>Share and enjoy your interesting stories with other people.</Text>
            <View style={styles.buttoncontainer}>
            <LinearGradient
  colors={['#B32DE5', '#34267D']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.button}>
  <TouchableOpacity onPress={handleCreateAccountPress}>
    <Text style={styles.buttonText}>Let’s Go</Text>
  </TouchableOpacity>
</LinearGradient>

              <View style={styles.buttoncontainers}>
                <Text style={styles.buttonTextt}>Doesn't Have Account ?</Text>
                <TouchableOpacity style={styles.button2} >
                  <Text style={styles.buttonTexttt}>Create Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  imageContainer: {
    marginTop: 0,
  },
  image: {
    height: 680,
    width: 360,
  },
  textcontainer: {
    marginTop: 360,
    height: 395,
    width: 390,
    borderTopLeftRadius: 50,
    position: 'absolute',
    backgroundColor: '#F5F5F5',
  },
  heading: {
    marginTop: 70,
    padding: 50,
  },
  heading1: {
    fontFamily: 'Poppins-Italic',
    fontWeight: '700',
    lineHeight: 34,
    fontSize: 33.18,
    color: 'black',
  },
  storyText: {
    color: '#B32DE5',
  },
  text: {
    marginTop: 15,
    fontSize: 19.2,
    lineHeight: 22,
    color: 'black',
  },
  buttoncontainer: {
    marginTop: 15,
  },
  button: {
    width: 276,
    borderRadius: 7,
    height: 44, // Corrected typo
    padding: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  buttoncontainers: {
    paddingTop: 30,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  buttonTextt: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  button2: {},
  buttonTexttt: {
    fontSize: 14,
    color: '#B32DE5',
    fontWeight: '500',
  },
});
