import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar, Image } from 'react-native';

export default class Updatepassword extends Component {
  componentDidMount() {
    // Navigate to homepage after 10 seconds
    setTimeout(() => {
        this.props.navigation.navigate('TabNavigator');
      }, 2000);
    }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#00000066" barStyle="dark-content" />
        <View style={styles.newcontianer}>
          <View style={styles.imagecontainer}>
            <Image
              source={require('../assets/sucess.png')}
              style={styles.banners}
            />
            <Text style={styles.text}>Congratulations</Text>
            <View style={styles.normaltext}>
              <Text style={styles.textt}>Your account is ready to use. You will be directed to the homepage in a few seconds.</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000066',
  },
  newcontianer: {
    height: 386,
    width: 290,
    top: 139,
    left: 35,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  imagecontainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banners: {
    height: 110,
    width: 110,
  },
  text: {
    marginTop: 39,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 22,
    color: '#B32DE5',
  },
  normaltext: {
    marginLeft: 20,
    marginRight: 20,
  },
  textt: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    textAlign: 'center',
    color: '#000000BF',
  },
});
