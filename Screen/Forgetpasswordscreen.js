import { Image, StyleSheet, Text, View,TouchableOpacity ,StatusBar} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
export default function Forgetpasswordscreen() {
  const navigation = useNavigation();
  const handleForgetPress = () => {
    navigation.navigate('Verifyscreen'); // Corrected the navigation call
  };
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.imagecontainer}>
        <Image
          source={require('../assets/forget.png')}
          style={styles.banners}
        />
        <Text style={styles.text}>Select which contact detail we should use to reset your password</Text>
      </View>
      <View style={styles.textbox}>
        <View style={styles.box1contaner}>
          <Text style={styles.box}>Via email</Text>
          <View style={styles.new}>
            <Image
              source={require('../assets/msg.png')}
              style={styles.msg}
            />
            <TextInput
              style={styles.box1}
              placeholder="muqadsazaheen30@gmail.com"
              placeholderTextColor="#757575"
            />
          </View>
          
        </View>
      </View>
      <View style={styles.textbox}>
        <View style={styles.box1contaner}>
          <Text style={styles.box}> Via Phone</Text>
          <View style={styles.new}>
            <Image
              source={require('../assets/call.png')}
              style={styles.call}
            />
            <TextInput
              style={styles.box1}
              placeholder="0356787765"
              placeholderTextColor="#757575"
            />
          </View>
          
        </View>
      </View>
      <View style={styles.buttoncontainer}>
              <LinearGradient
                colors={['#B32DE5', '#34267D']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}>
                <TouchableOpacity onPress={handleForgetPress}>
                  <Text style={styles.buttonText}>Veirfy</Text>
                </TouchableOpacity>
              </LinearGradient>
             
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imagecontainer: {
    alignItems: 'center',
  },
  banners: {
    height: 300,
    width: 300,
    marginLeft: 34,
  },
  text: {
    color: '#000000',
    marginLeft: 34,
    marginRight: 30,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 10, // Add marginTop for spacing
  },
  textbox: {
   
    alignItems: 'center', // Align items center
  },
  new: {
    flexDirection: 'row',
    alignItems: 'center', 
    position:'absolute',// Align items center
   
  },
  box1contaner: {
    
    borderWidth: 1,
    borderColor: '#B32DE5',
    borderRadius: 7,
    height: 65,
    width: 290,
    marginTop: 15,
   
  },
  
  box: {
    marginTop:8,
    color: '#757575',
    marginLeft: 42, // Adjusted marginLeft
    fontSize: 10,
    lineHeight: 16,
  },
  box1: {
    marginTop:10,
    color: '#212121',
    flex: 1, // Take remaining space
    marginLeft: 9,
  },
  msg: {
    marginTop:10,
    marginLeft: 8,
    height: 16,
    width: 20,
  },
  call:{
    marginTop:10,
    marginLeft: 8,
    height: 24,
    width: 24,
  },
  buttoncontainer: {
    marginTop: 60,
  },
  button: {
    width: 273,
    borderRadius: 7,
    height: 44, // Corrected typo
    padding: 8,
    alignItems: 'center',
    alignSelf:'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
})
