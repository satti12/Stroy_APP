import { Text, StyleSheet, View, Image, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

export default class Storyscreen extends Component {
  render() {
    const { navigation } = this.props; // Receive navigation object as a prop

    return (
      <View style={styles.container}>
        <FocusAwareStatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
        <View style={styles.imagecontainer}>
        
          <Image
            source={require('../assets/dog.png')}
            style={styles.banner}
          
          />
         
         
          <View style={styles.smallcontainer}>
          <TouchableOpacity>
            <Image
              source={require('../assets/view11.png')}
              style={styles.speaker}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
              source={require('../assets/view12.png')}
              style={styles.finger1}
            />
             </TouchableOpacity>
            <Text style={styles.no}>13</Text>
            <TouchableOpacity>
            <Image
              source={require('../assets/view13.png')}
              style={styles.finger2}
            />
            </TouchableOpacity>
             <Text style={styles.no}>13</Text>
             <TouchableOpacity  onPress={() => navigation.navigate('Commentscreen')}>
            <Image
              source={require('../assets/view15.png')}
              style={styles.comment}
            />
            </TouchableOpacity >
             <Text style={styles.no}>153</Text>
             <TouchableOpacity>
            <Image
              source={require('../assets/view16.png')}
              style={styles.share}
            />
            </TouchableOpacity>
             <Text style={styles.no}>13</Text>
          </View>
        </View>
        <View style={styles.textcontainer}>
            <Text style={styles.HEADING}>Fiction  </Text>
            <Text style={styles.mainHEADING}>The rise of sun </Text>
            <Text style={styles.authorname}>Julia Macavoy </Text>
            <Text style={styles.subheading}>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nunc ut  ligula vel ipsum ullamcorper{'\n'}malesuada. Nullam noLorem ipsum{'\n'}dolor sit amet, consectetur {'\n'}adipiscing elit. Nunc ut ligula vel ipsum ullamcorper malesuada.Nullam no .
       
  </Text>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imagecontainer: {
    position: 'relative',
  },
  banner: {
    width: '100%',
    height: 410,
    resizeMode: 'cover',
  },
  smallcontainer: {
    justifyContent: 'flex-end', 
    position: 'absolute',
    flexDirection:'column',
    top: 160, 
    right: 20, 
  },
  no:{
    color:'white',
    fontSize:10,
    marginLeft:12,
    fontWeight:'300',
    lineHeight:20,
  },
  speaker: { 
    width: 20,
    height: 18,
    marginLeft: 10, // Add some margin between icons if needed
  },
  finger1: {
    marginTop:26,
    width: 20,
    height: 18,
    marginLeft: 10,
  },
  finger2: {
    marginTop:12,
    width: 20,
    height: 18,
    marginLeft: 10,
  },
  comment: {
    marginTop:12,
    width: 19,
    height: 20,
    marginLeft: 10,
  },
  share: {
    marginTop:12,
    width: 20,
    height: 18,
    marginLeft: 10,
  },
  textcontainer:{
   
    marginHorizontal:16,
    lineHeight:29,

},
  HEADING:{
    marginTop:8,
    color:'#000000',
    lineHeight:26,
    fontSize:18,
    fontWeight:'600',
  },
  authorname:{
    color:'#000000',
    lineHeight:26,
    fontSize:16,
    fontWeight:'500',
  },
  mainHEADING:{
    fontFamily:'Poppins',
    marginTop:6,
    color:'#000000',
    lineHeight:26,
    fontSize:24,
    lineHeight:29,
    fontWeight:'700',
  },
  subheading:{
    fontFamily:'Poppins-Bold',
    marginTop:6,
    lineHeight:26,
    fontSize:16,
    color:'#000000',
  },
})
