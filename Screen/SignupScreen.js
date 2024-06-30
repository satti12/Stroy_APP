import { View, Text, StyleSheet, Image, StatusBar,TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const SignupScreen = () => {
const navigation=useNavigation();
const handleCreateAccountPress = () => {
   
    navigation.navigate('SignupScreen');
  };
const handelsignin=()=>
{
  navigation.navigate('Home');
};
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#B32DE5', '#7D2AB8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content" />
      </LinearGradient>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/login.png')}
          style={styles.banner}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.login}>Create an Account</Text>
        <View style={styles.inputcontainer}>
          <View>
          <TextInput
            style={styles.input}
            placeholder='Full Name'
            placeholderTextColor="#ADADAD"
          />
           </View>
           <View style={styles.email}>
           <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor="#ADADAD"
          />
          </View>
         
          <View style={styles.main}>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              placeholder='Password'
              placeholderTextColor="#ADADAD"
            />
            <Image
              source={require('../assets/icon.png')}
              style={styles.icon}
            />
            
          </View>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              placeholder='Confirm Password'
              placeholderTextColor="#ADADAD"
            />
            <Image
              source={require('../assets/icon.png')}
              style={styles.icon}
            />
            
          </View>
          </View>
     <View style={styles.buttoncontainer}>
         <LinearGradient
                colors={['#B32DE5', '#34267D']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}>
               <TouchableOpacity  onPress={handelsignin}>
                  <Text style={styles.buttonText}>Sign Up</Text>
               </TouchableOpacity>
         </LinearGradient>
         <View style={styles.buttoncontainers}>
                <Text style={styles.buttonTextt}>Already have an account?</Text>
                <TouchableOpacity style={styles.button2} onPress={handleCreateAccountPress}>
                  <Text style={styles.buttonTexttt}>Sign In</Text>
                </TouchableOpacity>
              </View>
     </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    height: StatusBar.currentHeight,
  },
  imageContainer: {

  },
  banner: {
    height: 160,
    width: 395,

    
  },
  login: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Poppins-ExtraBoldItalic',
  },
  text: {
    position: 'absolute',
    marginTop: 176,
    marginLeft: 25,
  },
  inputcontainer:{
    marginTop:39,   
   
  },
  email:{
    marginTop:25,
  },
  input: {
  
   
    borderWidth: 1,
    borderColor: '#B32DE5',
    borderRadius: 10,
    width: 313,
    height: 59,
    paddingHorizontal: 18,
  },
  inputWithIcon: {
    flexDirection: 'row',
    marginTop:25,
    alignItems: 'center',
    position: 'relative', // Added position relative
  },
  icon: {
    position: 'absolute', // Position the icon absolutely inside the input box
    right: 15, // Adjust the position of the icon as per your requirement
    height: 22,
    width: 22,
  },
  forgetpassword:{
    marginTop:10,
  },
  forgetpasswordtext:
  {
    color:'#B32DE5',
    fontSize:14,
    fontWeight:'500',
    lineHeight:16,
    textAlign:'right', 
    },
    buttoncontainer:{
      marginTop:30,
    },
    button:{
      alignSelf:'flex-end',
      width:126,
      borderRadius: 7,
      height: 44, // Corrected typo
      padding: 8,
      alignItems: 'center',
    },
    buttonText:{
      fontWeight:"600",
      fontSize:16,
      color:'white',
      lineHeight:22,
    },
    buttoncontainers: {
       marginTop:50,
      alignSelf:'center',
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
    input: {
  
   
      borderWidth: 1,
      borderColor: '#B32DE5',
      borderRadius: 10,
      width: 313,
      height: 59,
      paddingHorizontal: 18,
    },
});

export default SignupScreen;
