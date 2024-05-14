import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../assets/icon/LogoApp.svg';
import React, { useEffect } from 'react';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('HomePage'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.content}>
        <Logo />
        <Text style={styles.text}>Get More Done, Faster.</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F1AC23', // fallback color
    zIndex: -1,
    background: 'linear-gradient(180deg, #FFFFFF 0%, #F2AD21 100%)',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
});