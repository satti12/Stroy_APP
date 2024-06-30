import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', image: require('../assets/view2.png'), text: "25k views" },
  { id: '2', image: require('../assets/view9.png'), text: "25k views" },
  { id: '3', image: require('../assets/view8.png'), text: "25k views" },
  // Add more items as needed
];

const Profile = ({ navigation }) => {
  const [numColumns, setNumColumns] = useState(3);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Storyscreen')}>
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.itemText}>{item.text}</Text>
          <Image source={require('../assets/eyeicon.png')} style={styles.eyeicon} />
        </View>
        <Text style={styles.storytilte}>The rise of {"\n"}   sun</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.leftContainer}>
          <Image source={require('../assets/blackarroww.png')} style={styles.icon} />
          <View style={styles.middleContainer}>
            <View style={styles.circle}>
              <Image source={require('../assets/storypic.png')} style={styles.circleImage} />
            </View>
            <Text style={styles.profileName}>Julia Macavoy</Text>
            <Text style={styles.editProfile}>Edit Profile</Text>
          </View>
          <Image source={require('../assets/Vectordrawer.png')} style={styles.drawerIcon} />
        </View>
        <View style={styles.earningsContainer}>
          <Text style={styles.earningsText}>Total Earnings</Text>
          <Text style={styles.earningsText}>$256</Text>
        </View>
        <View style={styles.earningsContainer}>
          <Text style={styles.earningsText}>Total Stories</Text>
          <Text style={styles.earningsText}>6</Text>
        </View>
        <View style={styles.storyContainer}>
          <Text style={styles.storyHeaderText}>All Stories</Text>
          <FlatList
            key={numColumns} // Ensure a fresh render when numColumns changes
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            contentContainerStyle={styles.flatListContentContainer}
            ItemSeparatorComponent={() => null}
          />
          

        </View>
        <View style={styles.storyContainer2}>
          <FlatList
            key={numColumns} // Ensure a fresh render when numColumns changes
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            contentContainerStyle={styles.flatListContentContainer}
            ItemSeparatorComponent={() => null}
          />
          

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  firstContainer: {},
  leftContainer: {
    marginTop: 66,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 40,
    width: 18.41,
    height: 15.41,
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  circle: {
    backgroundColor: 'white',
    borderRadius: 50,
    marginRight: 15,
    width: 98,
    height: 98,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#B32DE5',
    borderWidth: 2,
    marginTop: 10,
  },
  circleImage: {
    width: 94,
    height: 94,
    borderRadius: 47,
  },
  profileName: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 24,
    marginBottom: 10,
  },
  editProfile: {
    color: '#B32DE5',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  storytilte:{
    marginTop:10,
    color: '#B32DE5',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    
  },
  drawerIcon: {
    marginRight: 30,
    height: 20.34,
    width: 3.88,
  },
  earningsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  earningsText: {
    marginLeft: 30,
    marginRight: 30,
    fontWeight: '600',
    fontSize: 14,
    color: '#000000',
  },
  storyContainer: {
    marginTop: 10,
    marginLeft: 30,
  },
  storyContainer2: {
   
    marginLeft: 30,
  },
  storyHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 22,
  },
  flatListContentContainer: {
    paddingBottom: 10,
  },
  item: {
    marginLeft: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    marginTop:10,
    height:116,
    width: 91,
    borderRadius:20,
  },
  overlay: {
    position: 'absolute',
    top: 20,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 10,
    color: '#FFFFFF',
    paddingHorizontal: 5,
  },
  eyeicon: {
    width: 11.67,
    height: 7,
    marginLeft: 5,
   
  },
});

export default Profile;
