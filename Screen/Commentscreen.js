import { Text, StyleSheet, View, Image, StatusBar ,ScrollView} from 'react-native'
import React, { Component } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

export default class Commentscreen  extends Component {
  
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
          
       <View style={styles.ba}>
       <TouchableOpacity  onPress={() => navigation.navigate('Storyscreen')}>
      <Image
         source={require('../assets/arrow.png')}
         style={styles.arrowicon}
        />
        </TouchableOpacity>
       </View>

         
          
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
             <TouchableOpacity>
            <Image
              source={require('../assets/view15.png')}
              style={styles.comment}
            />
            </TouchableOpacity>
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
        <ScrollView style={styles.position }>
        <View style={styles.commentsection}>
            <View style={styles.horizontal}>
               <Image
               source={require('../assets/girl.png')}
               style={styles.imagee}
               />
                <Text style={[styles.name ,{marginLeft:15,fontWeight:'500'}]}>amyrobson</Text>
               <Text style={[styles.name, { color: '#8A8A8A',fontSize:14 }]}> 1 month ago</Text>
              </View>
             <Text style={styles.commenttext}>The author's words wove a tapestry{'\n'}that awakened my imagination,{'\n'}and touched my heart</Text>
              <View style={styles.sharecontainer}>
              <Image
               source={require('../assets/share.png')}
               style={styles.shareimage}
               />
               <Text style={styles.sharetext}>Replay</Text>
                </View>   
        </View>
        <View style={styles.commentsection}>
            <View style={styles.horizontal}>
               <Image
               source={require('../assets/boy.png')}
               style={styles.imagee}
               />
                <Text style={[styles.name ,{marginLeft:15,fontWeight:'500'}]}>maxblagun</Text>
               <Text style={[styles.name, { color: '#8A8A8A',fontSize:14 }]}> 2 weeks ago</Text>
              </View>
             <Text style={styles.commenttext}>As you embark on your own reading,{'\n'}I wish you the same enchantment and{'\n'}discovery that this book has
             {'\n'}brought to me. Enjoy the voyage!"</Text>
              <View style={styles.sharecontainer}>
              <Image
               source={require('../assets/share.png')}
               style={styles.shareimage}
               />
               <Text style={styles.sharetext}>Replay</Text>
                </View>   
                
        </View>
        <View style={styles.commentsection}>
            <View style={styles.horizontal}>
               <Image
               source={require('../assets/boy.png')}
               style={styles.imagee}
               />
                <Text style={[styles.name ,{marginLeft:15,fontWeight:'500'}]}>maxblagun</Text>
               <Text style={[styles.name, { color: '#8A8A8A',fontSize:14 }]}> 2 weeks ago</Text>
              </View>
             <Text style={styles.commenttext}>As you embark on your own reading,{'\n'}I wish you the same enchantment and{'\n'}discovery that this book has
             {'\n'}brought to me. Enjoy the voyage!"</Text>
              <View style={styles.sharecontainer}>
              <Image
               source={require('../assets/share.png')}
               style={styles.shareimage}
               />
               <Text style={styles.sharetext}>Replay</Text>
                </View>   
                
        </View>
        <View style={styles.commentsection}>
            <View style={styles.horizontal}>
               <Image
               source={require('../assets/boy.png')}
               style={styles.imagee}
               />
                <Text style={[styles.name ,{marginLeft:15,fontWeight:'500'}]}>maxblagun</Text>
               <Text style={[styles.name, { color: '#8A8A8A',fontSize:14 }]}> 2 weeks ago</Text>
              </View>
             <Text style={styles.commenttext}>As you embark on your own reading,{'\n'}I wish you the same enchantment and{'\n'}discovery that this book has
             {'\n'}brought to me. Enjoy the voyage!"</Text>
              <View style={styles.sharecontainer}>
              <Image
               source={require('../assets/share.png')}
               style={styles.shareimage}
               />
               <Text style={styles.sharetext}>Replay</Text>
                </View>   
                
        </View>
        </ScrollView>
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  commentsection:{
   marginTop:20,
   marginLeft:20,
  },
  horizontal:{
   flexDirection:'row',
  },
  imagee:{
    width: 32,
    height: 31.79,
    
  },
  position:{
     marginTop:20,
  },
  commenttext:{
    marginTop:15,
    color:'#67727E',
    lineHeight:24,
    fontWeight:'400',
    fontSize:16,
  },
  name:{
    marginTop:2,
    color:'#334253',
    lineHeight:24,
    fontSize:16,
  },
  sharecontainer:{
    flexDirection:"row",
    marginTop:20,
    marginLeft:210,
  },
  shareimage:{
    marginTop:5,
    height:12.17,
    width:14,
  },
  sharetext:{
    marginLeft:8,
    color:'#5357B6',
    fontWeight:'500',
    fontSize:16,
    lineHeight:24,
  },
  imagecontainer: {
    position: 'relative',
  },
  banner: {
    width: '100%',
    height: 410,
    resizeMode: 'cover',
  },
  ba:{
    
    position:'absolute',
    marginTop:70,
    marginLeft:30,
    
  },
  arrowicon:{
    height:15,
    width:18.41,
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
  
})
