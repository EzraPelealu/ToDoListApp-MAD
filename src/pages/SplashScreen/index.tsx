import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../assets/icon/LogoApp.svg';
import React, { useEffect } from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('HomePage'), 3000);
    }, []);

  return (
    <View style={styles.container}>
        <Logo />
        <Text style={styles.text}>Get More Done, Faster.</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F1AC23',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: '#020202',
    },

});