import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, StatusBar, ScrollView, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', image: require('../assets/view2.png'), text: "25k views", paragraph: "The rise of sun", newtext: "This is a nature lover, who protect the forests from........", name: "Racheal Silk" },
  { id: '2', image: require('../assets/view1.png') , text: "25k views", paragraph: "The rise of sun", newtext: "This is a nature lover, who protect the forests from........", name: "Racheal Silk"},
  { id: '3', image: require('../assets/view1.png'), text: "25k views", paragraph: "The rise of sun", newtext: "This is a nature lover, who protect the forests from........", name: "Racheal Silk" },
  // Add more items as needed
];
const newdata = [
  { id: '1', image: require('../assets/view5.png'), text: "25k views", paragraph: "The rise of sun", newtext: "This is a nature lover, who protect the forests from........", name: "Racheal Silk" },
  { id: '2', image: require('../assets/view6.png') , text: "25k views", paragraph: "The rise of sun", newtext: "This is a nature lover, who protect the forests from........", name: "Racheal Silk"},
  { id: '3', image: require('../assets/view7.png'), text: "25k views", paragraph: "The rise of sun", newtext: "This is a nature lover, who protect the forests from........", name: "Racheal Silk" },
  // Add more items as needed
];
const Thirddata = [
  { id: '1', image: require('../assets/view8.png'), text: "25k views", paragraph: "The rise of sun", newtext: "This is a nature lover, who protect the forests from........", name: "Racheal Silk" },
  { id: '2', image: require('../assets/view9.png') , text: "25k views", paragraph: "The rise of sun", newtext: "This is a nature lover, who protect the forests from........", name: "Racheal Silk"},
  { id: '3', image: require('../assets/view10.png'), text: "25k views", paragraph: "The rise of sun", newtext: "This is a nature lover, who protect the forests from........", name: "Racheal Silk" },
  // Add more items as needed
];

const Home = ({ navigation }) => {
  const [numColumns, setNumColumns] = useState(3); // Initialize numColumns state
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Storyscreen')}>
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.iconview}>
          <Text style={styles.itemText}>{item.text}</Text>
          <Image source={require('../assets/eyeicon.png')} style={styles.eyeicon} />
        </View>
        <Text style={styles.paragraph}>{item.paragraph}</Text>
        <Text style={styles.newtext}>{item.newtext}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const keyExtractor = (item) => item.id;

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.searchContainer}>
        <Text style={styles.text}>Mike,</Text>
        <Image source={require('../assets/search.png')} style={styles.banner} />
      </View>
      <View style={styles.new}>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.subHeading}>Popular Stories</Text>
        <View style={styles.line} />
        <FlatList
          key={numColumns} // Ensure a fresh render when numColumns changes
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={numColumns}
          contentContainerStyle={styles.flatListContentContainer}
          ItemSeparatorComponent={() => null} // Remove item separator
        />
      </View>
      <View style={styles.secondcontainer}>
        <Text style={styles.fictiontxt}>Fiction</Text>
        <View style={styles.linee} />
        <FlatList
          key={numColumns} // Ensure a fresh render when numColumns changes
          data={newdata}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={numColumns}
          contentContainerStyle={styles.flatListContentContainer}
          ItemSeparatorComponent={() => null} // Remove item separator
        />
      </View>
      <View style={styles.secondcontainer}>
        <Text style={styles.fictiontxt}>Mystery</Text>
        <View style={styles.linee} />
        <FlatList
          key={numColumns} // Ensure a fresh render when numColumns changes
          data={Thirddata}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={numColumns}
          contentContainerStyle={styles.flatListContentContainer}
          ItemSeparatorComponent={() => null} // Remove item separator
        />
      </View>
      <View style={styles.secondcontainer}>
        <Text style={styles.fictiontxt}>Thriller</Text>
        <View style={styles.linee} />
        <FlatList
          key={numColumns} // Ensure a fresh render when numColumns changes
          data={Thirddata}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={numColumns}
          contentContainerStyle={styles.flatListContentContainer}
          ItemSeparatorComponent={() => null} // Remove item separator
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  item: {
    marginLeft: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 130,
  },
  iconview: {
    position: 'absolute',
    bottom:100,
    flexDirection: 'row',
    left: 10,
  },
  eyeicon: {
    width: 10,
    height: 7,
    marginLeft:26,
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  newtext: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    right: 12,
    color: '#FFFFFF',
    fontSize: 6,
    lineHeight: 12,
    fontWeight: '500',
  },
  paragraph: {
    position: 'absolute',
    bottom: 55,
    left: 10,
    right: 0,
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
  },
  name: {
    position: 'absolute',
    bottom: 10,
    left: 39,
    right: 0,
    color: '#FFFFFF',
    fontSize: 8,
    lineHeight: 12,
    fontWeight: '700',
  },
  searchContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  text: {
    marginLeft: 8,
    fontSize: 27.65,
    color: '#B32DE5',
    lineHeight: 35.5,
    fontWeight: '700',
  },
  heading: {
    marginLeft: 26,
    fontSize: 27.65,
    color: '#000000',
    lineHeight: 29,
    fontWeight: '700',
  },
  subHeading: {
    marginLeft: 26,
    marginTop: 8,
    fontSize: 22,
    color: '#000000',
    lineHeight: 29,
    fontWeight: '600',
  },
  banner: {
    height: 36,
    width: 36,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#D9D9D9',
  },
  secondcontainer: {
    position: 'relative',
  },
  fictiontxt: {
    marginLeft: 26,
    marginTop: 8,
    fontSize: 22,
    color: '#000000',
    lineHeight: 29,
    fontWeight: '600',
  },
  linee: {
    width: '100%',
    height: 2,
    backgroundColor: '#D9D9D9',
  },
  new: {},
  flatListContentContainer: {
    marginLeft: 10,
    paddingTop: 10, // Adjust top padding if needed
  },
  Thirdcontainer: {
    position: 'relative',
  }
});

export default Home;
